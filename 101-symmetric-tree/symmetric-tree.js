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
    let q = [root.left, root.right];
    while (q.length) {
        let p1 = q.shift();
        let p2 = q.shift();
        if (!p1 && !p2) continue;
        if (!p1 || !p2) return false;
        if (p1.val !== p2.val) return false;
        q.push(p1.left);
        q.push(p2.right);
        q.push(p1.right);
        q.push(p2.left);
    }
    return true;
};