/**
 * [1,2,3,4] 可组合的所有4位数数组
 * 回溯法
 */

const permute = (nums) => {
    const res = [], path = []
    backtrack(nums, nums.length, [])
    return res

    function backtrack(n, k, used) {
        if (path.length === 3) {
            res.push(Array.from(path))
        }
        for (let i = 0; i < n.length; i++) {
            if (used[i]) continue;
            path.push(n[i])
            used[i] = true
            backtrack(n, k, used)
            path.pop()
            used[i] = false
        }
    }

}

console.log(permute([1, 2, 3, 4]))