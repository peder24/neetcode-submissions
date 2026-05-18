class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let maxH = 0

        for (let i = 0; i < heights.length; i++) {
            let start = i
            while (stack.length > 0 && stack[stack.length - 1][1] >= heights[i]) {
                const [index, stackH] = stack.pop()
                maxH = Math.max(maxH, stackH * (i - index))
                start = index
            }
            stack.push([start, heights[i]])
        }

        for (const [index, h] of stack) {
            maxH = Math.max(maxH, h * (heights.length - index))
        }
        return maxH
    }
}
