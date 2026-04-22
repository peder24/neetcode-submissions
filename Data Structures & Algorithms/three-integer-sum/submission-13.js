class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = []
        nums.sort((a, b) => a - b)
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i - 1] == nums[i]) {
                continue
            }

            if (nums[i] > 0) {
                break
            }
            
            let l = i + 1, r = nums.length - 1
            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r]

                if (sum < 0) {
                    l++
                } else if (sum > 0) {
                    r--
                } else {
                    res.push([nums[i], nums[l], nums[r]])
                    l++;
                    r--;
                    while (l < r && nums[l - 1] == nums[l]) {
                        l++
                    }
                }
            }
        }
        return res
    }
}
