class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // for(let i = 0; i< nums.length; i++){
        //     for(let j = i+1; j<nums.length; j++){
        //         if(nums[i]+nums[j] === target){
        //             return [i,j]
        //         }
        //     }
        // }

        let key = new Map()
        for(let [i, num] of nums.entries()){
            const complement = target - num
            if(key.has(complement)){
                return [key.get(complement), i]
                
            }
            key.set(num, i)


        }
    }
}
