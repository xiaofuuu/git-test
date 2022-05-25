function Node(val, next) {
  this.val = val === undefined ? undefined : val;
  this.next = next === undefined ? null : next;
}

let list = [1, 2, 3, 4];

let n1 = null, prev = null;
for (let i = 0; i < list.length; i++) {
  n1 = new Node(list[i]);
  if (prev) prev.next = n1
  prev = prev.next
}

console.log(prev);
