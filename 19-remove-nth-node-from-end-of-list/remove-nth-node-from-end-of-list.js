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
    let sentinel = new ListNode();
    sentinel.next = head;
    let size = 0;
    let curr = head;
    while(curr){
        size++;
        curr=curr.next;
    }

    let prev = sentinel;
    for(i=0;i<size-n;i++){
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};