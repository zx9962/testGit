// 泛型
let arr:number[] = [1,2,3]
let arr1:Array<number> = [1,2,3]

//函数
function greet(name: string){
    console.log(`hello${name}`);
}
greet('小米')

// 指定函数返回类型
function getFavoritsNumber():number{
    return 26
}

interface dataType {
    x: number;
    y: number;
}
function printCoord(pt:dataType){
    console.log('坐标的x值：'+pt.x);
    console.log('坐标的x值：'+pt.y);
}
let add:dataType = {
    x:3,
    y:7
}
printCoord(add)
// console.log(add);
