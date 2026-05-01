class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let maxArea = 0

        for (let i = 0; i < heights.length; i++) {
            let start = i
            while (
                stack.length > 0 && 
                heights[i] <= stack[stack.length - 1][1]
            ) {
                const [index, stackH] = stack.pop()
                maxArea = Math.max(maxArea, stackH * (i - index))
                start = index
            }
            stack.push([start, heights[i]])
        }

        for (const [index, h] of stack) {
            maxArea = Math.max(maxArea, h * (heights.length - index))
        }
        return maxArea
    }
}
