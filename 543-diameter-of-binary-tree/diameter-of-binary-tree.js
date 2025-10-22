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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;
    var traversal = function (node) {
        if (!node) return 0;
        let left = traversal(node.left);
        let right = traversal(node.right);
        let currDiameter = left + right;
        maxDiameter = Math.max(currDiameter, maxDiameter);
        return 1 + Math.max(left, right);
    }
    traversal(root);
    return maxDiameter;
};