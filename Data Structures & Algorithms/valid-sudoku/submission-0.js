class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({length:9}, () => new Set());
        const col = Array.from({length:9}, ()=> new Set());
        const boxes = Array.from({length:9}, ()=> new Set())

        for(let i = 0; i< 9; i++){
            for(let j = 0; j<9; j++){

                const val = board[i][j];
                if(val === ".") continue;

               const indexBox =  Math.floor(i/3)*3 + Math.floor(j/3);

               if(row[i].has(val) || col[j].has(val) || boxes[indexBox].has(val)){
                return false
               }
               row[i].add(val);
               col[j].add(val);
               boxes[indexBox].add(val)
            }
        }
        return true;
    }
}
