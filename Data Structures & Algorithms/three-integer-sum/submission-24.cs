public class Solution {
    public List<List<int>> ThreeSum(int[] nums) {
        var res = new List<List<int>>();
        Array.Sort(nums);

        for (int i = 0; i < nums.Length; i++) {
            int l = i + 1, r = nums.Length - 1;

            if (i > 0 && nums[i - 1] == nums[i]) {
                continue;
            }

            if (nums[i] > 0) {
                break;
            }

            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.Add(new List<int> {nums[i], nums[l], nums[r]});
                    l++;
                    r--;
                    while (l < r && nums[l - 1] == nums[l]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
