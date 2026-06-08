class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] = (count[nums[i]] || 0) + 1
        }

        const array = []
        for (const [num, index] of Object.entries(count)) {
            array.push([index, num])
        }
        array.sort((a, b) => a[0] - b[0])

        const res = []
        for (let i = 0; i < k; i++) {
            res.push(array.pop()[1])
        }
        return res
    }
}
