class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map()
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1)
        }

        const freq = Array.from({length: nums.length + 1}, () => [])
        for (const [num, cnt] of Array.from(count)) {
            freq[cnt].push(num)
        }

        const res = []
        for (let i = freq.length - 1; i > 0; i--) {
            for (const v of freq[i]) {
                res.push(v)
                if (res.length === k) {
                    return res
                }
            }
        }
    }
}
