public class Solution {
    public int LongestConsecutive(int[] nums) {
        var seen = new HashSet<int>(nums);
        int res = 0;

        foreach (int num in nums) {
            if (!seen.Contains(num - 1)) {
                int length = 1;
                int streak = num;
                while (seen.Contains(streak + 1)) {
                    length++;
                    streak++;
                }
                res = Math.Max(res, length);
            }
        }
        return res;
    }
}
