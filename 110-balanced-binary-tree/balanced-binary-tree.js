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
 * @return {boolean}
 */
var isBalanced = function (root) {
    
    let ans = true;
    var traversal = function (node) {
        if (!node) return 0;
        let left = traversal(node.left);
        let right = traversal(node.right);
        if (Math.abs(left - right) > 1) ans = ans && false;
        return 1 + Math.max(left, right)
    }
    traversal(root);
    return ans;
};