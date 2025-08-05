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
var middleNode = function (head) {
    let curr = head;
    let size = 1;
    while (curr.next !== null) {
        curr = curr.next;
        size++;
    }
    let end = Math.floor(size / 2);
    let res = head;
    for (i = 0; i < end; i++) {
        res = res.next;
    }
    return res;

};