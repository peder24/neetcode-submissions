class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (const s of strs) {
            res += s.length + '#' + s 
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let l = 0, r = 0
        while (r < str.length) {
            r = l
            while (str[r] !== '#') {
                r++
            }
            let length = parseInt(str.substring(l, r))
            l = r + 1
            r = l + length
            res.push(str.substring(l, r))
            l = r
        }
        return res
    }
}
