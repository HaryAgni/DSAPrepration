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
    let head = new ListNode(1);
    let node = head;
    let carry = 0;
    let p1 = l1;
    let p2 = l2;
    while (p1 || p2 || carry !== 0) {
        let sum = (p1 && p1.val) + (p2 && p2.val) + carry;
        let rem = sum % 10;
        carry = Math.floor(sum / 10);
        node.next = new ListNode(rem);
        node = node.next;
        p1 = p1 ? p1.next : null;
        p2 = p2 ? p2.next : null;
    }
    return head.next;
};