class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""

        for (const s of strs) {
            res += s.length + "#" + s
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
            while (str[r] != "#") {
                r++
            }
            let length = parseInt(str.substring(l, r))
            l = r + 1
            r = length + l
            res.push(str.substring(l, r))
            l = r
        }
        return res
    }
}
