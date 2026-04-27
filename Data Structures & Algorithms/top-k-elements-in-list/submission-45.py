class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        for num in nums:
            count[num] = 1 + count.get(num, 0)
        
        freq = [[] for i in range(len(nums) + 1)]
        for num, cnt in count.items():
            freq[cnt].append(num)
        
        arr = []
        for i in range(len(freq) - 1, -1, -1):
            for v in freq[i]:
                arr.append(v)
                if len(arr) == k:
                    return arr