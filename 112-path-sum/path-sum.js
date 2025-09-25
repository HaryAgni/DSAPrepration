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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    
    let ans = false;
    var traversal = function (node, sum) {
        let newSum = sum + node.val;
        if (!node.left && !node.right && newSum == targetSum) ans = true;
        node.left && traversal(node.left, newSum);
        node.right && traversal(node.right, newSum);
    }
    traversal(root, 0);
    return ans;
};