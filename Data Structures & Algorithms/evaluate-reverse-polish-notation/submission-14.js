class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for (const c of tokens) {
            if (c === '+') {
                stack.push(stack.pop() + stack.pop())
            } else if (c === '*') {
                stack.push(stack.pop() * stack.pop())
            } else if (c === '-') {
                let a = stack.pop(), b = stack.pop()
                stack.push(b - a)
            } else if (c === '/') {
                let a = stack.pop(), b = stack.pop()
                stack.push(parseInt(b/a))
            } else {
                stack.push(parseInt(c))
            }
        }
        return stack[stack.length - 1]
    }
}
