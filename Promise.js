/*
 * @Author: your name
 * @Date: 2022-03-20 00:35:07
 * @LastEditTime: 2022-04-14 09:19:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /git-test/Promise.js
 */
class Promise {
  status;
  data;
  constructor(executor) {
    const resolve = (data) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.data = data;
      }
    };

    const reject = () => {
      if (this.status === "pending") {
        this.status = "rejected";
      }
    };

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者
      executor(resolve, reject);
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error);
    }
  }
  then = (onFulFilled, onRejected) => {
    if (this.status === "fulfilled") {
      onFulFilled && onFulFilled(this.data);
    }
    if (this.status === 'rejected') {
      onRejected && onRejected();
    }
  };
}
/**
 * use Promise
 */
const p = new Promise((resolve, reject) => {
  resolve(4);
  reject()
});
