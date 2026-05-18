class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {


        const numSet = new Set(nums);
        let maxCount = 0;

        for(let num of nums){

            if(!numSet.has(num -1)){

                let count = 1;


                while(numSet.has(num + count)){
                    count++;
                }
                maxCount = Math.max(maxCount, count)
            }

        }
        return maxCount;
    }
}
