class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let L = 0;
    let R = heights.length - 1;
    let maxArea = 0;

    while(L < R){
        let area = Math.min(heights[L], heights[R]) * (R - L);
        maxArea = Math.max(maxArea, area);

        if(heights[L] < heights[R]){
            L++;
        } else {
            R--;
        }
    }
    return maxArea;

    }
}
