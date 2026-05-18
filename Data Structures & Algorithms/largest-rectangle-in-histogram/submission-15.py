class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        maxH = 0

        for i, h in enumerate(heights):
            start = i
            while stack and stack[-1][1] >= heights[i]:
                index, stackH = stack.pop()
                maxH = max(maxH, stackH * (i- index))
                start = index
            stack.append([start, heights[i]])
        
        for index, h in stack:
            maxH = max(maxH, h * (len(heights) - index))
        return maxH