class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        longest = 0
        maxf = 0
        l, r = 0, 0
        count = {}

        while r < len(s):
            count[s[r]] = 1 + count.get(s[r], 0)
            maxf = max(maxf, count.get(s[r]))

            while (r - l + 1) - maxf > k:
                count[s[l]] -= 1
                l += 1
            longest = max(longest, r - l + 1)
            r += 1
        return longest