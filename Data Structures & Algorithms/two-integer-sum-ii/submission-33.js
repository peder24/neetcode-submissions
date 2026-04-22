class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const res = {}

        for (let i = 0; i < numbers.length; i++) {
            let diff = target - numbers[i]
            if (diff in res) {
                return [res[diff] + 1, i + 1]
            }
            res[numbers[i]] = i
        }
    }
}
