class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        for i, num in enumerate(nums):
            count[num] = 1 + count.get(num, 0)
        
        freq = [[] for i in range(len(nums) + 1)]
        for key, value in count.items():
            freq[value].append(key)
        
        res = []
        for i in range(len(freq) - 1, -1, -1):
            for v in freq[i]:
                res.append(v)
                if len(res) == k:
                    return res