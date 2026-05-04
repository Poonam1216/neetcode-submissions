class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const pair = new Map();

        for(let str of strs){
           const t =  str.split('').sort().join('') 

            if( pair.has(t)){
                pair.get(t).push(str)
            }
            else{
                pair.set(t, [str])
            }
        }
            return Array.from(pair.values())

    }
}
