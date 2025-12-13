/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;
    let curr = head;
    let size = 0;
    
    while (curr) {
        curr = curr.next;
        size++;
    }
    k = k % size;
    if (k == 0) return head;
    let slow = head;
    let fast = head;
    for (i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    let temp = slow.next;
    slow.next = null;
    fast.next = head;
    return temp;
};