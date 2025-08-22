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
    let p1 = l1;
    let p2 = l2;
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    while (p1 || p2 || carry) {
        let a = p1 ? p1.val : 0;
        let b = p2 ? p2.val : 0;
        let sum = a + b + carry;
        let rem = sum % 10;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(rem);
        curr = curr.next;
        p1 = p1 && p1.next;
        p2 = p2 && p2.next;
    }
    return dummy.next;
};