/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }
    curr = head;
    if(size==n){
        return curr.next;
    }
    for (i = 0; i < size - n - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return head;
};