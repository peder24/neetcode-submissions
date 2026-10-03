class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        maxL = 0
        l, r = 0, 0
        maxF = 0

        while r < len(s):
            count[s[r]] = 1 + count.get(s[r], 0)
            maxF = max(maxF, count[s[r]])

            while (r - l + 1) - maxF > k:
                count[s[l]] -= 1
                l += 1
            
            maxL = max(maxL, r - l + 1)
            r += 1
        return maxL