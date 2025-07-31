/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;
    let x =0;
    while(i<nums.length){
        if(nums[i]!==nums[x]){
            nums[x+1] =nums[i];
            x++;
            i++;
        }
        else{i++;}
    }
    return x+1;
};