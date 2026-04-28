class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0, l = 0, r = 0

        while (r < prices.length) {
            if (prices[l] <= prices[r]) {
                maxP = Math.max(maxP, prices[r] - prices[l])
                r += 1
            } else {
                l = r
            }
        }
        return maxP
    }
}
