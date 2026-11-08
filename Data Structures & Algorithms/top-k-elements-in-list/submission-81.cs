public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        var count = new Dictionary<int, int>();
        foreach (var num in nums)
        {
            count[num] = 1 + count.GetValueOrDefault(num, 0);
        }

        List<int>[] freq = new List<int>[nums.Length + 1];
        for (int i = 0; i < freq.Length; i++)
        {
            freq[i] = new List<int>();
        }
        foreach (var v in count)
        {
            freq[v.Value].Add(v.Key);
        }

        int[] res = new int[k];
        int index = 0;
        for (int i = freq.Length - 1; i > 0; i--)
        {
            foreach (int val in freq[i])
            {
                res[index++] = val;
                if (index == k)
                {
                    return res;
                }
            }
        }
        return new int[]{};
    }
}
