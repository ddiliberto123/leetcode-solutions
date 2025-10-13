function removeElement(nums: number[], val: number): number {
    let rightPtr = nums.length - 1;
    for (let i = 0; i <= rightPtr; i++) {
        if (nums[i] == val) {
            nums[i] = nums[rightPtr];
            rightPtr--;
            i--;
        }
    }
    return rightPtr + 1;
};