class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = []
        nums.sort((a, b) => a - b)
        for (let i = 0; i < nums.length; i++) {
            let l = i + 1, r = nums.length - 1
            if (i > 0 && nums[i - 1] === nums[i]) {
                continue
            }

            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r]
                if (sum > 0) {
                    r--
                } else if (sum < 0) {
                    l++
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l - 1] === nums[l]) {
                        l++
                    }
                }
            }
        }
        return res
    }
}
