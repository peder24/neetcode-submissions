class MinStack {
    constructor() {
        this.stack = []
        this.minstack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        val = Math.min(
            val, 
            this.minstack.length > 0 ? this.minstack[this.minstack.length - 1] : val)
        this.minstack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minstack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minstack[this.minstack.length - 1]
    }
}
