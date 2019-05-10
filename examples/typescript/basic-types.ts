// 基础类型

// 布尔值
let isDone: boolean = false

// 数字
let number1: number = 1
let number2: number = 0x10

// 字符串
let str: string = '123'

// 数组
let arr: number[] = [1]
let list: Array<number> = [1, 2, 3]

// 元组Tuple
let x: [string, number] = ['', 2]
console.log(x[0].substr(0, 1))

// 枚举
enum Color {
    blue,
    red = 1,
    green = 100
}
let c: Color = Color.blue
console.log(c)
let colorName: string = Color[1]
console.log(colorName)

// Any
let notSure: any = 4
notSure = '123'

// void
function fn(): void {
    console.log(1)
}
// undefined 和null
let und: undefined = undefined
let null1: null = null
let str2: string = '123'
str2 = undefined

// never
function error(): never {
    throw new Error('error')
}