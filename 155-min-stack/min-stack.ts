class MinStack {
    stack: number[][];
    topIndex: number;
    constructor() {
        this.stack = [];
        this.topIndex = -1;
    }

    push(val: number): void {
        if (this.topIndex == -1) {
            this.stack.push([val, val])
            this.topIndex = 0;
        } else {
            const min = val < this.stack[this.topIndex][1] ? val : this.stack[this.topIndex][1];
            this.stack.push([val, min])
            this.topIndex++;
        }
    }

    pop(): void {
        this.topIndex--;
        this.stack.pop(); 
    }

    top(): number {
        return this.stack[this.topIndex][0];
    }

    getMin(): number {
        return this.stack[this.topIndex][1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */