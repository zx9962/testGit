"use strict";
// 泛型
let arr = [1, 2, 3];
let arr1 = [1, 2, 3];
//函数
function greet(name) {
    console.log(`hello${name}`);
}
greet('小米');
// 指定函数返回类型
function getFavoritsNumber() {
    return 26;
}
function printCoord(pt) {
    console.log('坐标的x值：' + pt.x);
    console.log('坐标的x值：' + pt.y);
}
let add = {
    x: 3,
    y: 7
};
printCoord(add);
// console.log(add);
