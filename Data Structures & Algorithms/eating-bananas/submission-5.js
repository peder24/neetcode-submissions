class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1, r = Math.max(...piles)
        let res = r

        while (l <= r) {
            let k = l + parseInt((r - l)/2)
            let totaltimes = 0

            for (const p of piles) {
                totaltimes += Math.ceil(p/k)
            }

            if (totaltimes <= h) {
                res = Math.min(res, k)
                r = k - 1
            } else {
                l = k + 1
            }
        }
        return res
    }
}
