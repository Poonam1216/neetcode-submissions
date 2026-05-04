class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""

        for(let str of strs){
            result += str.length + "#" + str
        }
            return result

        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
  decode(str) {
    const result = [];
    let i = 0;

    while (i < str.length) {
        // Step 1: # ki position dhundo
        let j = i;
        while (str[j] !== '#') j++;

        // Step 2: i se j tak → length
        let len = parseInt(str.slice(i, j));

        // Step 3: # ke baad len characters lo
        let word = str.slice(j + 1, j + 1 + len);
        result.push(word);

        // Step 4: i ko aage badhao
        i = j + 1 + len;
    }

    return result;
}
}
