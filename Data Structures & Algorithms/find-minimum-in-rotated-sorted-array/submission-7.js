class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1
        let res = nums[0]

        while (l <= r) {
            if (nums[l] < nums[r]) {
                res = Math.min(res, nums[l])
                break
            }

            let mid = l + parseInt((r - l)/2)
            res = Math.min(res, nums[mid])

            if (nums[mid] >= nums[l]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return res
    }
}
