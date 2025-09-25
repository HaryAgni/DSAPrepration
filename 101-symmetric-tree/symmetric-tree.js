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
var isSymmetric = function (root) {
    var traversal = function (leftNode, rightNode) {
        if (!leftNode && !rightNode) return true;
        if (!leftNode || !rightNode) return false;
        return leftNode.val == rightNode.val &&
            traversal(leftNode.left, rightNode.right) &&
            traversal(leftNode.right, rightNode.left);
    }
    return traversal(root.left, root.right);
};