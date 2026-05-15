class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        const arr = []
        for (const [num, cnt] of Object.entries(count)) {
            arr.push([cnt, num])
        }
        arr.sort((a, b) => a[0] - b[0])

        const res = []
        for (let i = 0; i < k; i++) {
            res.push(arr.pop()[1])
        }
        return res
    }
}
