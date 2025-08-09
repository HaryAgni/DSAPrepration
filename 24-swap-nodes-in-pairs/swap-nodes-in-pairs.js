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
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let left = head;
    let right = head.next;
    let newHead = right.next;
    right.next = left;
    left.next = swapPairs(newHead);
    return right;

};