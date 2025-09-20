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
    let curr = root;
    let stack = [];
    let seen = null;
    let ans = [];
    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        let top = stack[stack.length - 1];
        if (top.right && seen != top.right) {
            curr = top.right;
        } else {
            ans.push(top.val);
            seen = stack.pop();
        }

    }
    return ans;
};