public class Solution {

    public string Encode(IList<string> strs) {
        string res = "";
        foreach (var s in strs) {
            res += s.Length + "#" + s;
        }
        return res;
    }

    public List<string> Decode(string s) {
        var res = new List<string>();

        int l = 0;
        while (l < s.Length) {
            int r = l;
            while (s[r] != '#') {
                r++;
            }
            int length = int.Parse(s.Substring(l, r - l));
            l = r + 1;
            r = l + length;
            res.Add(s.Substring(l, r - l));
            l = r;
        }
        return res;
   }
}
