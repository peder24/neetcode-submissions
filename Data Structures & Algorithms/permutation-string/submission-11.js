class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false
        }

        const countS1 = new Array(26).fill(0)
                , countS2 = new Array(26).fill(0)
        for (let i = 0; i < s1.length; i++) {
            countS1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            countS2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }   

        let match = 0
        for (let i = 0; i < 26; i++) {
            if (countS1[i] === countS2[i]) {
                match += 1
            } else {
                match += 0
            }
        }

        let l = 0
        for (let r = s1.length; r < s2.length; r++) {
            if (match == 26) {
                return true
            }

            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0)
            countS2[index] += 1
            if (countS1[index] === countS2[index]) {
                match += 1
            } else if (countS1[index] + 1 === countS2[index]) {
                match -= 1
            }

            index = s2.charCodeAt(l) - 'a'.charCodeAt(0)
            countS2[index] -= 1
            if (countS1[index] === countS2[index]) {
                match += 1
            } else if (countS1[index] - 1 === countS2[index]) {
                match -= 1
            }
            l++
        }
        return match === 26
    }
}
