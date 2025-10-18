function isValid(s: string): boolean {
    const mappings: Map<string,string> = new Map([
        [')','('],
        ['}','{'],
        [']','['],
    ]);
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (mappings.get(s.charAt(i))) {
            const top = stack.length ? stack.pop() : "x";
            if (top !== mappings.get(s.charAt(i)))
                return false
        } else
            stack.push(s.charAt(i))
    }
    return stack.length === 0;
}