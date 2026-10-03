class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seen = set(nums)
        maxL = 0

        for num in nums:
            if num - 1 not in seen:
                length = 1
                cur = num
                while cur + 1 in seen:
                    length += 1
                    cur += 1
                maxL = max(maxL, length)
        return maxL