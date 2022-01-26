/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2022-01-26 21:26:05
 * @LastEditors: yuanlijian
 * @LastEditTime: 2022-01-26 21:26:30
 */
/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2022-01-26 20:22:04
 * @LastEditors: yuanlijian
 * @LastEditTime: 2022-01-26 21:18:26
 */


//类
class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    sayHi() {
        console.log(`姓名 ${this.name} , 学号 ${this.number}`);
    }
}

//通过类new对象/实例
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name);
console.log(xialuo.number);
xialuo.sayHi();