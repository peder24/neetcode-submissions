class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map()

        for (const s of strs) {
            const code = new Array(26).fill(0)
            for (const c of s) {
                code[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            let key = code.join("#")
            if (!res.has(key)) {
                res.set(key, [])
            }

            res.get(key).push(s)
        }
        return Array.from(res.values())
    }
}
