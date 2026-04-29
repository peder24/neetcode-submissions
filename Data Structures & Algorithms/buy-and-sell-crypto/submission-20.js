class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0
        let l = 0, r = 0

        while (r < prices.length) {
            if (prices[l] <= prices[r]) {
                maxP = Math.max(maxP, prices[r] - prices[l])
                r++
            } else {
                l = r
            }
        }
        return maxP
    }
}
