function removeDuplicates(nums: number[]): number {
    let count = 1;
    for (let i = 0; i < nums.length; i++) {
        count++;
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return count;
};