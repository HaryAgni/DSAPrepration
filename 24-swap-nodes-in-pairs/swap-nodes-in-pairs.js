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
    if(!head || !head.next) return head;
    let node = new ListNode();
    node.next = head;
    let prev = node;
    let curr = head;
    let next = head.next;
    while(curr && curr.next){
        curr.next = next.next;
        next.next = curr;
        prev.next = next;
        prev = curr;
        curr = curr.next;
        next = curr && curr.next;
    }
    return node.next;

};