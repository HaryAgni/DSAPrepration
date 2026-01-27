/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    let prev = head;
    let curr = head.next;
    let head2 = curr;
    while (curr && curr.next) {
        prev.next = prev.next.next;
        curr.next = curr.next.next;
        curr = prev.next.next;
        prev = prev.next;
    }
    prev.next = head2;
    return head;
};