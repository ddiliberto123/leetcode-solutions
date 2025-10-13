function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length)
        return false
    let letters = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (letters.get(s[i])) {
            letters.set(s[i], letters.get(s[i]) + 1)
        } else {
            letters.set(s[i], 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (letters.get(t[i])) {
            letters.set(t[i], letters.get(t[i]) - 1)
        } else {
            return false
        }
    }
    for (const pair of letters.entries()) {
        if (pair[1] != 0)
            return false;
    }
    return true
};