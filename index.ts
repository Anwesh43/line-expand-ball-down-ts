const w : number = window.innerWidth
const h : number = window.innerHeight
const parts : number = 3 
const scGap : number = 0.02 / parts 
const delay : number = 20
const sizeFactor : number = 3.9 
const rFactor : number = 9.9 
const backColor : string = "#bdbdbd"
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
