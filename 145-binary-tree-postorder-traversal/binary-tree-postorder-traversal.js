/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return [];
    
    let ans = [];
    let s1 = [root];
    let s2 = [];
    while (s1.length) {
        let curr = s1.pop();
        s2.push(curr.val);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }
    while (s2.length) ans.push(s2.pop());
    return ans;
};