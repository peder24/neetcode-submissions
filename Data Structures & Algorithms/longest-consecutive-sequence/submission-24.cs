public class Solution {
    public int LongestConsecutive(int[] nums) {
        var seen = new HashSet<int>(nums);
        int maxL = 0;

        foreach (int num in nums) {
            if (!seen.Contains(num - 1)) {
                int length = 1;
                int curr = num;
                while (seen.Contains(curr + 1)) {
                    length++;
                    curr++;
                }
                maxL = Math.Max(maxL, length);
            }
        }
        return maxL;
    }
}
