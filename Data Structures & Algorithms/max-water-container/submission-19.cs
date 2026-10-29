public class Solution {
    public int MaxArea(int[] heights) {
        int max = 0;
        int l = 0, r = heights.Length - 1;

        while (l < r) {
            int area = Math.Min(heights[l], heights[r]) * (r - l);
            max = Math.Max(max, area);
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return max;
    }
}
