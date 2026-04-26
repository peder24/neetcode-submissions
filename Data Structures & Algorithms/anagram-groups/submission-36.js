class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map()

        for (const s of strs) {
            let sortedS = s.split("")
                            .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
                            .join("")
            
            if (!res.has(sortedS)) {
                res.set(sortedS, [])
            }

            res.get(sortedS).push(s)
        }
        return Array.from(res.values())
    }
}
