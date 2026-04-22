class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const res = {}

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i]
            if (diff in res) {
                return [res[diff], i]
            }
            res[nums[i]] = i
        }
    }
}
