class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length).fill(1);
        let surfix = new Array(nums.length).fill(1);

        for(let i = 1; i < nums.length; i++){
            prefix[i] = prefix[i-1] * nums[i -1];
        }

        for(let i = nums.length -2 ; i >=0; i--){
            surfix[i] = surfix[i+1] * nums[i+1];
        }

        let output = [];
        for(let i = 0; i < nums.length; i++){

            output.push(prefix[i] * surfix[i]);
        }
        return output

    }
}
