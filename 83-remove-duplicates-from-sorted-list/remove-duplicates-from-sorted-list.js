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
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode(null, head);
    let prev = dummy;
    while (prev && prev.next) {
        if (prev.val == prev.next.val) prev.next = prev.next.next;
        else prev = prev.next;

    }
    return dummy.next;
};