class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0
        let maxf = 0
        let l = 0, r = 0
        const count = {}

        while (r < s.length) {
            count[s[r]] = (count[s[r]] || 0) + 1
            maxf = Math.max(maxf, count[s[r]])

            while ((r - l + 1) - maxf > k) {
                count[s[l]] -= 1
                l += 1
            }

            longest = Math.max(longest, r - l + 1)
            r += 1
        }
        return longest
    }
}
