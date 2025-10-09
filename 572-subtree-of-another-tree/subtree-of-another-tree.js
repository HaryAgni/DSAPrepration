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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let rootStr = serialize(root);
    let subRootStr = serialize(subRoot);
    return rootStr.includes(subRootStr)
};

var serialize = function (root) {
    if (!root) return "-#";
    return `-${root.val}${serialize(root.left)}${serialize(root.right)}`
}