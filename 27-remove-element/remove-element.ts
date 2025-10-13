function removeElement(nums: number[], val: number): number {
    let count = 0;
    let rightPtr = nums.length - 1;
    for (let i = 0; i <= rightPtr; i++) {
        count++;
        if (nums[i] == val) {
            count--;
            nums[i] = nums[rightPtr];
            rightPtr--;
            i--;
        }
    }
    return count;
};