/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (slow && fast && fast.next) {
        if (slow.next == fast.next.next) {
            return true;
        }
        else {
            slow = slow.next;
            fast = fast.next.next;
        }
    }
    return false;
};