class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1

        while (l <= r) {
            let mid = l + parseInt((r - l)/2)
            if (target === nums[mid]) {
                return mid
            }
            
            if (nums[mid] >= nums[l]) {
                if (target < nums[l] || target > nums[mid]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            } else {
                if (target > nums[r] || target < nums[mid]) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
        }
        return -1
    }
}
