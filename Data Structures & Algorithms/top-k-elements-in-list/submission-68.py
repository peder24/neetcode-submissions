class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        for num in nums:
            count[num] = 1 + count.get(num, 0)
        
        array = []
        for num, index in count.items():
            array.append([index, num])
        array.sort()

        res = []
        for i in range(k):
            res.append(array.pop()[1])
        return res