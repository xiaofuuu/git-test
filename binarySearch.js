var searchInsert = function (nums, target) {
  if (nums[nums.length - 1] <= target) {
    return nums[nums.length - 1] + 1;
  }
  var l = 0;
  var r = nums.length - 1;
  var mid = 0;
  while (l < r) {
    mid = Math.floor((r - l) / 2) + l;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      l = mid + 1;
    }
    if (nums[mid] > target) {
      r = mid - 1;
    }
  }
  return mid;
};

console.log(searchInsert([1, 3, 5, 6], 6));
