public class Solution {
    public int LargestRectangleArea(int[] heights) {
        var stack = new Stack<int[]>();
        int maxArea = 0;

        for (int i = 0; i < heights.Length; i++) {
            int h = heights[i], start = i;
            while (stack.Count > 0 && h < stack.Peek()[0]) {
                int[] pair = stack.Pop();
                maxArea = Math.Max(maxArea, pair[0] * (i - pair[1]));
                start = pair[1];
            }
            stack.Push(new int[] {h, start});
        }

        foreach (var p in stack) {
            maxArea = Math.Max(maxArea, p[0] * (heights.Length - p[1]));
        }
        return maxArea;
    }
}
