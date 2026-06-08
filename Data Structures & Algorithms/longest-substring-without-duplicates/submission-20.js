class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const res = new Set()
        let longest = 0
        let l = 0, r = 0

        while (r < s.length) {
            while (res.has(s[r])) {
                res.delete(s[l])
                l++
            }
            res.add(s[r])
            longest = Math.max(longest, r - l + 1)
            r++
        }
        return longest
    }
}
