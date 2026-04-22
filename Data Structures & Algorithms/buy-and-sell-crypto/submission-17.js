class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0
        let l = 0, r = 1

        while (r < prices.length) {
            if (prices[r] < prices[l]) {
                l = r
            } else {
                maxP = Math.max(maxP, prices[r] - prices[l])
                r++
            }
        }
        return maxP
    }
}
