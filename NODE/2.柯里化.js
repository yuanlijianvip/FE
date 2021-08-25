/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-08-25 10:58:29
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-08-25 11:01:08
 */

// 柯里化的含义就是让一个函数变的更具体一些  （原则上返回的函数只能接受一个参数） 多个参数我们也姑且认为是柯里化
// 高阶函数中 包含柯里化函数的 （柯里化函数就是一个高阶函数） 
// 偏函数:返回一个函数，函数的参数不止一个。

// 判断类型有几种方式 typeof Object.prototype.toString instanceof constructor 
function isType(type, value) { // [object String]
    return Object.prototype.toString.call(value) === `[object ${type}]`
}

// 通用的柯里化函数 就是根据调用的时候传递的参数，和函数的参数 做判断，如果传递的参数和定义的参数一致，就让函数执行
const curry = fn => {
    // 需要有一个记录参数的变量args
    const inner = (args = []) => {
        // 每次都用一个新的数组 + 自己的参数
        return fn.length <= args.length ? fn(...args) : (...a)=>inner([...args,...a])
    }
    return inner();
}
// const type = curry(isType)
// let isString = type('String');
// let isNumber = type('Number');
// console.log(isString('abc'));
// console.log(isNumber('abc'));