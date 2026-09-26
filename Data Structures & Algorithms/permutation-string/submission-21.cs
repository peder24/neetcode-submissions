public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        if (s1.Length > s2.Length) {
            return false;
        }

        int[] countS1 = new int[26], countS2 = new int[26];
        for (int i = 0; i < s1.Length; i++) {
            countS1[s1[i] - 'a']++;
            countS2[s2[i] - 'a']++;
        }
        
        int match = 0;
        for (int i = 0; i < 26; i++) {
            if (countS1[i] == countS2[i]) {
                match++;
            }
        }

        int l = 0;
        for (int r = s1.Length; r < s2.Length; r++) {
            if (match == 26) {
                return true;
            }

            int index = s2[r] - 'a';
            countS2[index]++;
            if (countS1[index] == countS2[index]) {
                match++;
            } else if (countS1[index] + 1 == countS2[index]) {
                match--;
            }

            index = s2[l] - 'a';
            countS2[index]--;
            if (countS1[index] == countS2[index]) {
                match++;
            } else if (countS1[index] - 1 == countS2[index]) {
                match--;
            }
            l++;
        }
        return match == 26;
    }
}
