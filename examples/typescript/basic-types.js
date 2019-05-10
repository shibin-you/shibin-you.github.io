// 基础类型
// 布尔值
var isDone = false;
// 数字
var number1 = 1;
var number2 = 0x10;
// 字符串
var str = '123';
// 数组
var arr = [1];
var list = [1, 2, 3];
// 元组Tuple
var x = ['', 2];
console.log(x[0].substr(0, 1));
// 枚举
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
var c = Color.red;
