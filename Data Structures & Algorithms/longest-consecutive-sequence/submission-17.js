class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums)
        let longest = 0

        for (let i = 0; i < nums.length; i++) {
            if (!seen.has(nums[i] - 1)) {
                let length = 1
                while (seen.has(nums[i] + 1)) {
                    length++
                    nums[i]++
                }
                longest = Math.max(longest, length)
            }
        }
        return longest
    }
}
