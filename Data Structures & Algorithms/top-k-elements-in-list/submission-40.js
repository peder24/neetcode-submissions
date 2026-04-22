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

        const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)])
        arr.sort((a, b) => b[0] - a[0])
        return arr.slice(0, k).map((pair) => pair[1])
    }
}
