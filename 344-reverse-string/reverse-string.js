/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j =s.length-1;
    let i=0;
    while(i<j){
        let temp = s[i];
        s[i]=s[j];
        s[j]=temp;
        i++;
        j--;
    }
};