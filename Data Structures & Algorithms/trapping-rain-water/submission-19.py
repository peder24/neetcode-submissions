class Solution:
    def trap(self, height: List[int]) -> int:
        res = 0
        l, r = 0, len(height) - 1
        maxleft, maxright = height[l], height[r]

        while l < r:
            if height[l] <= height[r]:
                l += 1
                maxleft = max(maxleft, height[l])
                res += maxleft - height[l]
            else:
                r -= 1
                maxright = max(maxright, height[r])
                res += maxright - height[r]
        return res