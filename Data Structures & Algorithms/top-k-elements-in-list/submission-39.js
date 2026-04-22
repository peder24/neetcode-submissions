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

        const freq = Array.from({length: nums.length + 1}, () => [])
        for (const [num, cnt] of Object.entries(count)) {
            freq[cnt].push(num)
        }

        const res = []
        for (let i = freq.length - 1; i > 0; i--) {
            for (const v of freq[i]) {
                res.push(v)
                if (res.length == k) {
                    return res
                }
            }
        }
    }
}
