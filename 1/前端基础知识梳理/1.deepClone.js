/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2022-01-26 21:26:54
 * @LastEditors: yuanlijian
 * @LastEditTime: 2022-01-26 21:26:54
 */
/**
 * 深拷贝
 */
 const obj1 = {
	age: 20,
  name: 'xxx',
  address: {
  	city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}
const obj2 = deepClone(obj1);
obj2.address.city = 'shanghai';
console.log(obj1.address.city);

/**
 * @Author: yuanlijian
 * @description: 深拷贝
 * @param {*} obj //要拷贝的对象
 * @return {*}
 */
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        //obj是null, 或者不是对象和数组，直接返回
        return obj;
    } 
    //初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        //保证key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    return result;
}