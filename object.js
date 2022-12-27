var obj = {
    name: 'tony',
    getName: function() {
        console.log(this.name)
    }
}

const _getName = obj.getName.bind(obj);

console.log(_getName())

function customInstance(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while (true) {
        if (!proto) return false
        if (proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

console.log(customInstance(1, Number))

function isPrime(n) {
  if (n < 2) {
    return true;
  }
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function splitArray(arr, n) {
    let lastArray = []
    for (var i = 0; i <= n; i+=n) {
        lastArray.push(arr.slice(i, n + i))
    }
    return lastArray
}

console.log(splitArray([1,2,3], 2));
