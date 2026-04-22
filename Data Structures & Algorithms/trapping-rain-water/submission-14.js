class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let area = 0
        let l = 0, r = height.length - 1
        let maxL = height[l], maxR = height[r]

        while (l < r) {
            if (maxL <= maxR) {
                l++
                maxL = Math.max(maxL, height[l])
                area += maxL - height[l]
            } else {
                r--
                maxR = Math.max(maxR, height[r])
                area += maxR - height[r]
            }
        }
        return area
    }
}
