/**
result = []
function backtrack(路径, 选择列表):
  if 满足结束条件:
    result.add(路径)
  return

  for 选择 of 选择列表:
    做选择
    backtrack(路径, 选择列表)
    撤销选择
 * @param {*} nums 
 * @returns 
 */

var permute = function (nums) {
  const res = [],
    path = [];
  backtracking(nums, nums.length, []);
  return res;

  function backtracking(n, k, used) {
    if (path.length === k) {
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) continue;
      path.push(n[i]);
      used[i] = true; // 同支
      backtracking(n, k, used);
      path.pop();
      used[i] = false;
    }
  }
};
console.log(permute([1, 2, 3]));
