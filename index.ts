const w : number = window.innerWidth
const h : number = window.innerHeight
const parts : number = 3 
const scGap : number = 0.02 / parts 
const delay : number = 20
const sizeFactor : number = 3.9 
const rFactor : number = 9.9 
const backColor : string = "#bdbdbd"
const strokeFactor : number = 90
const colors : Array<string> = [
    "teal",
    "purple",
    "cyan",
    "indigo",
    "green"
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}

class DrawingUtil {

    static drawLine(context : CanvasRenderingContext2D, x1 : number, y1 : number, x2 : number, y2 : number) {
        context.beginPath()
        context.moveTo(x1, y1)
        context.lineTo(x2, y2)
        context.stroke()
    }

    static drawCircle(context : CanvasRenderingContext2D, x : number, y : number, r : number) {
        context.beginPath()
        context.arc(x, y, r, 0, 2 * Math.PI)
        context.fill()
    }

    static drawExpandLineBallDown(context : CanvasRenderingContext2D, scale : number) {
        const size : number = Math.min(w, h) / sizeFactor 
        const r : number = Math.min(w, h) / rFactor 
        const sf : number = ScaleUtil.sinify(scale)
        const sf1 : number = ScaleUtil.divideScale(sf, 0, parts)
        const sf2 : number = ScaleUtil.divideScale(sf, 1, parts)
        context.save()
        context.translate(w / 2, 0)
        DrawingUtil.drawLine(context, -size * 0.5 * sf1, 0.8 * h, size * 0.5 * sf1, 0.8 * h)
        DrawingUtil.drawCircle(context, 0, -r + 0.5 * h * sf2, r)
        context.restore()
    }

    static drawELBDNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        context.lineCap = 'round'
        context.lineWidth = Math.min(w, h) / strokeFactor 
        context.lineCap = 'round'
        DrawingUtil.drawExpandLineBallDown(context, scale)
    }
}
