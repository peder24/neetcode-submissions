class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length, COLS = matrix[0].length
        let top = 0, bot = ROWS - 1

        while (top <= bot) {
            let row = top + parseInt((bot - top)/2)
            if (target < matrix[row][0]) {
                bot = row - 1
            } else if (target > matrix[row][COLS - 1]) {
                top = row + 1
            } else {
                break
            }
        }

        if (top > bot) {
            return false
        }

        let row = top + parseInt((bot - top)/2)
        let l = 0, r = COLS - 1
        while (l <= r) {
            let mid = l + parseInt((r - l)/2)
            if (target < matrix[row][mid]) {
                r = mid - 1
            } else if (target > matrix[row][mid]) {
                l = mid + 1
            } else {
                return true
            }
        }
        return false
    }
}
