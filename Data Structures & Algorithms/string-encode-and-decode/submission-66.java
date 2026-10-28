class Solution {

    public String encode(List<String> strs) {
        String res = "";
        for (String s : strs) {
            res += s.length() + "#" + s;
        }
        return res;
    }

    public List<String> decode(String str) {
        List<String> res = new ArrayList<>();

        int l = 0;
        while (l < str.length()) {
            int r = l;
            while (str.charAt(r) != '#') {
                r++;
            }
            int length = Integer.parseInt(str.substring(l, r));
            l = r + 1;
            r = length + l;
            res.add(str.substring(l, r));
            l = r;
        }
        return res;
    }
}
