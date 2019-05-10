# 基础类型

## 布尔值
最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean
```ts
var isDone:boolean=false
```
## 数字
和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 ```number```。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。

```ts
let number1:number=1
let number2:number=0x10
```

## 字符串


```ts
let str:string='123'
```
## 数组
第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
```ts
let arr:number[]=[1,2,3]
```
第二种方式是使用数组泛型，Array<元素类型>：

```ts
let list:Array<number>=[1,2,3]
```
## 元组Tuple
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
```ts
let x:[string,number]=['',2]
```

## 枚举
默认情况下，从0开始为元素编号。也可以手动的指定成员的数值。
```ts
enum Color {
    blue,
    red = 1,
    green = 100
}
```
枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
```ts
let colorName:string=Color[1]
console.log(colorName)
```

## Any
不清楚类型的变量指定一个类型

## Void
某种程度上来说，void类型像是与any类型相反，它表示没有任何类型
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null： 
## Null 和 Undefined
