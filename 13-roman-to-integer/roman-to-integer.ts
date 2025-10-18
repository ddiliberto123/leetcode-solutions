function romanToInt(s: string): number {
    let total = 0;
    const values: Map<string, number> = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && values.get(s.charAt(i)) < values.get(s.charAt(i + 1))) {
            total += values.get(s.charAt(i + 1)) - values.get(s.charAt(i));
            i += 1
        }
        else 
            total += values.get(s.charAt(i))
    }
    return total
};