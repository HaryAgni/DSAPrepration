/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let temp = new ListNode();
    let ans = temp;
    let p1 = l1;
    let p2 = l2;
    let carry = 0;
    while (p1 || p2 || carry) {
        let sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
        p1 = p1 && p1.next;
        p2 = p2 && p2.next;
    }
    return ans.next;
};