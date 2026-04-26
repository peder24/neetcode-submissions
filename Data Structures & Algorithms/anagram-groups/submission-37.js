class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map()

        for (const s of strs) {
            let count = new Array(26).fill(0)
            for (const c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            let code = count.join('#')

            if (!res.has(code)) {
                res.set(code, [])
            }

            res.get(code).push(s)
        }
        return Array.from(res.values())
    }
}
