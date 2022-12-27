// var obj = {
//     name: 'tony',
//     getName: function() {
//         console.log(this.name)
//     }
// }

// const _getName = obj.getName.bind(obj);

// console.log(_getName())

// function customInstance(left, right) {
//     let proto = Object.getPrototypeOf(left);
//     let prototype = right.prototype;
//     while (true) {
//         if (!proto) return false
//         if (proto === prototype) return true
//         proto = Object.getPrototypeOf(proto)
//     }
// }

// console.log(customInstance(1, Number))