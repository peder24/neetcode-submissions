class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0
        let l = 0, r = height.length - 1
        let maxleft = height[l], maxright = height[r]
        while (l < r) {
            if (height[l] <= height[r]) {
                l++
                maxleft = Math.max(maxleft, height[l])
                res += maxleft - height[l]
            } else {
                r--
                maxright = Math.max(maxright, height[r])
                res += maxright - height[r]
            }
        }
        return res
    }
}
