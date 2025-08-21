/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let curr = head;
    while (curr) {
        if (curr.val == val) {
            prev.next = curr.next;
            curr.next = null;
            curr = prev.next;
        }
        else {
            curr = curr.next;
            prev = prev.next;
        }
    }
    return dummy.next;
};