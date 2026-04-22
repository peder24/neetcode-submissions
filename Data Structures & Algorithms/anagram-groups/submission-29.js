class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}

        for (const s of strs) {
            let sortedS = s.split("")
                            .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
                            .join("")

            if (!(sortedS in res)) {
                res[sortedS] = []
            }

            res[sortedS].push(s)
        }
        return Object.values(res)
    }
}
