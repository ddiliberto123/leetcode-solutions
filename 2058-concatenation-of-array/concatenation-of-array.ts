function getConcatenation(nums: number[]): number[] {
    let ans: number[] = []
    ans.push(...nums)
    ans.push(...nums)
    return ans;
};