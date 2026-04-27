class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        res = set(nums)
        longest = 0

        for num in nums:
            if num - 1 not in res:
                length = 1
                while num + 1 in res:
                    length += 1
                    num += 1
                longest = max(longest, length)
        return longest