public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int l = 0, r = 0;
        int maxL = 0;
        var count = new List<char>();

        while (r < s.Length) {
            while (count.Contains(s[r])) {
                count.Remove(s[l]);
                l++;
            }
            count.Add(s[r]);
            maxL = Math.Max(maxL, r - l + 1);
            r++;
        }
        return maxL;
    }
}
