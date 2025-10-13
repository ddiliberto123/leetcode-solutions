function removeAnagrams(words: string[]): string[] {
    for (let i = 0; i < words.length; i++) {
        if (i < words.length - 1 && checkAnagram(words[i], words[i+1])) {
            words.splice(i+1,1);
            i--
        }
    }
    return words;
};

function checkAnagram(word1: string, word2: string): boolean {
    if (word1.length != word2.length)
        return false
    let letters = new Map<string, number>();
    for (let i = 0; i < word1.length; i++) {
        if (letters.get(word1[i])) {
            letters.set(word1[i], letters.get(word1[i]) + 1)
        } else {
            letters.set(word1[i], 1);
        }
    }
    for (let i = 0; i < word2.length; i++) {
        if (letters.get(word2[i])) {
            letters.set(word2[i], letters.get(word2[i]) - 1)
        } else {
            return false
        }
    }
    for (const pair of letters.entries()) {
        if (pair[1] != 0)
            return false;
    }
    return true
}