function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length)
        return false
    const str1 = [...s].sort();
    const str2 = [...t].sort();
    return str1.join('') === str2.join('')
};