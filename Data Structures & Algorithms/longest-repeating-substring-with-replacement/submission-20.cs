public class Solution {
    public int CharacterReplacement(string s, int k) {
        var count = new Dictionary<char, int>();
        int l = 0, r = 0;
        int maxF = 0;
        int maxL = 0;

        while (r < s.Length) {
            count[s[r]] = count.GetValueOrDefault(s[r], 0) + 1;
            maxF = Math.Max(maxF, count[s[r]]);
            while (((r - l + 1) - maxF) > k) {
                count[s[l]]--;
                l++;
            }
            maxL = Math.Max(maxL, r - l + 1);
            r++;
        }
        return maxL;
    }
}
