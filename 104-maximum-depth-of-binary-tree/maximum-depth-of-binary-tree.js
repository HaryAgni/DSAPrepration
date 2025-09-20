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
var maxDepth = function (root) {
    if (!root) return 0;
    let maxLevel = 1;
    var traversal = function (node, level) {
        node.left && traversal(node.left, level + 1);
        node.right && traversal(node.right, level + 1);
        maxLevel = Math.max(level, maxLevel);
    }
    traversal(root, 1);
    return maxLevel;
};