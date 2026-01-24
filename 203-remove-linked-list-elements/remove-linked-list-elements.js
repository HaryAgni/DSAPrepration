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
    if (!head) return head;
    let sentinel = new ListNode(null, head);
    let prev = sentinel;
    let curr = head;
    while (curr) {
        if (curr.val == val) {
            let temp = curr.next;
            prev.next = curr.next;
            curr.next = null;
            curr = temp;
        } else {
            curr = curr.next;
            prev = prev.next;
        }
    }
    return sentinel.next;
};