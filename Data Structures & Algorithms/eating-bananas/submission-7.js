class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0, r = Math.max(...piles)
        let res = r

        while (l <= r) {
            let k = l + Math.round((r - l)/2)
            let totaltime = 0

            for (const p of piles) {
                totaltime += Math.ceil(p/k)
            }

            if (totaltime <= h) {
                res = Math.min(res, k)
                r = k - 1
            } else {
                l = k + 1
            }
        }
        return res
    }
}
