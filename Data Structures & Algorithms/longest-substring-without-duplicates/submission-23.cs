public class Solution {
    public int LengthOfLongestSubstring(string s) {
        var seen = new List<char>();
        int l = 0, r = 0;
        int maxL = 0;

        while (r < s.Length) {
            while (seen.Contains(s[r])) {
                seen.Remove(s[l]);
                l++;
            }
            seen.Add(s[r]);
            maxL = Math.Max(maxL, r - l + 1);
            r++;
        }
        return maxL;
    }
}
