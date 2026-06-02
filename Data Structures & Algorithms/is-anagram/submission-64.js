class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const res = new Array(26).fill(0)
        for (let i = 0; i < s.length; i++) {
            res[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
            res[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1
        }

        for (const v of res) {
            if (v !== 0) {
                return false
            }
        }
        return true
    }
}
