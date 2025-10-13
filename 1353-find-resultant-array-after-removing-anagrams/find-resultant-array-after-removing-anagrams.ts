function removeAnagrams(words: string[]): string[] {
    for (let i = 0; i < words.length; i++) {
        if (i < words.length - 1 && isAnagram(words[i], words[i+1])) {
            words.splice(i+1,1);
            i--
        }
    }
    return words;
};

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