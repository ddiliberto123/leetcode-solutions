function plusOne(digits: number[]): number[] {
    let n = digits.length;
    for (let idx = n - 1; idx >= 0; --idx) {
        if (digits[idx] == 9) {
            digits[idx] = 0;
        }
        else {
            digits[idx]++;
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}