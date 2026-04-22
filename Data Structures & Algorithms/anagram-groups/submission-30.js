class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}

        for (const s of strs) {
            const code = new Array(26).fill(0)
            for (const c of s) {
                code[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            if (!(code in res)) {
                res[code] = []
            }

            res[code].push(s)
        }
        return Object.values(res)
    }
}
