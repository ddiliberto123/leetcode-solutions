function calPoints(operations: string[]): number {
    let ops: number[] = [];
    for (const op of operations) {
        // console.log(op)
        switch (op) {
            case "+": {
                ops.push(ops[ops.length - 1] + ops[ops.length - 2]);
				break;
            }
            case "C": {
                ops.pop();
				break;
            }
            case "D": {
                if (ops.length > 0) {
                    ops.push(2 * ops[ops.length - 1]);
                }
				break;
            }
            default: {
                ops.push(parseInt(op))
                break;
            }
        }
    }
    return ops.reduce((x, y) => x + y, 0);
};