public class Solution {
    public bool SearchMatrix(int[][] matrix, int target) {
        int COLS = matrix[0].Length;
        int ROW = matrix.Length;
        int top = 0, bot = ROW - 1;
        int row = 0;

        while (top <= bot) {
            row = top + ((bot - top)/2);
            if (target < matrix[row][0]) {
                bot = row - 1;
            } else if (target > matrix[row][COLS - 1]) {
                top = row + 1;
            } else {
                break;
            }
        }

        if (!(top <= bot)) {
            return false;
        }

        int l = 0, r = COLS - 1;
        while (l <= r) {
            int mid = l + ((r - l)/2);
            if (target < matrix[row][mid]) {
                r = mid - 1;
            } else if (target > matrix[row][mid]) {
                l = mid + 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
