/*
 * @Author: your name
 * @Date: 2021-12-04 15:16:59
 * @LastEditTime: 2021-12-04 15:19:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /git-test/index.js
 */

// split function
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const splitArray = (arr, n) => {
  let result = [];
  for (var i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }

  return result;
};

console.log(splitArray(arr, 3))