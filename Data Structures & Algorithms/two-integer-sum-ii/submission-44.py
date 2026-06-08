class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        res = {}

        for i, num in enumerate(numbers):
            diff = target - num
            if diff in res:
                return [res[diff] + 1, i + 1]
            res[num] = i
        return res