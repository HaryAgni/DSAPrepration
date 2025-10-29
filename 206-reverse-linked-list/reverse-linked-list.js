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
var reverseList = function (head) {
    if (!head || !head.next) return head;
    let p1 = head;
    let p2 = head.next;
    while (p1 && p2) {
        let temp = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = temp;
    }
    head.next = null;
    return p1;

};