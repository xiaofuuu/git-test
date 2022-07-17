function deepClone(obj, newObj) {
  var newObj = newObj || {};
  for (var i in obj) {
    if (typeof obj[i] === "object") {
      newObj[i] = obj[i].constructor === Array ? [] : {};
      deepClone(obj[i], newObj[i]);
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
}

console.log(deepClone({ a: 1, b: 2, c: [1, 2, 3] }));

function throttle(fn, time) {
  let cur = 0;
  return function() {
    if (Date.now() - cur > time) {
      cur = Date.now()
      fn && fn.call()
    }
  }
}

var t = throttle(function() {
  console.log('hello world')
}, 1000)

setInterval(() => {
  t()
}, 600)