function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length)
        return false
    let sCounter: number[] = new Array(26).fill(0)
    let tCounter: number[] = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        sCounter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        tCounter[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
        if (sCounter[i] != tCounter[i])
            return false
    }
    return true
};