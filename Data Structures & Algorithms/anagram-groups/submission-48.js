class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}

        for (const s of strs) {
            const array = new Array(26).fill(0)
            for (const c of s) {
                array[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            if (!(array in res)) {
                res[array] = []
            }
            res[array].push(s)
        }
        return Object.values(res)
    }
}
