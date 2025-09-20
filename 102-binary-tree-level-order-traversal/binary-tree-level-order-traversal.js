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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let ans = [];
    var traversal = function (node, level) {
        if (!ans[level]) ans[level] = [];
        ans[level].push(node.val);
        node.left && traversal(node.left, level + 1);
        node.right && traversal(node.right, level + 1);
    }
    traversal(root, 0);
    return ans;
};