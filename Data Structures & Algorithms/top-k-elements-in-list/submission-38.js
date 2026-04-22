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

        const arr = Object.entries(count)
                            .map(([num, freq]) => [freq, parseInt(num)])
        arr.sort((a, b) => b[0] - a[0])

        const result = []
        for (let i = 0; i < k; i++) {
            result.push(arr[i][1])
        }

        return result
    }
}
