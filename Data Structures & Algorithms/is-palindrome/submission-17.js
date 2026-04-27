class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1

        while (l <= r) {
            while (l < r && !this.isAlphaNum(s[l])) {
                l++
            }
            while (r > l && !this.isAlphaNum(s[r])) {
                r--
            }
            if (s[r].toLowerCase() !== s[l].toLowerCase()) {
                return false
            }
            l++
            r--
        }
        return true
    }

    isAlphaNum(c) {
        let code = c.charCodeAt(0)
        return (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0) ||
                code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0) ||
                code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0))
    }
}
