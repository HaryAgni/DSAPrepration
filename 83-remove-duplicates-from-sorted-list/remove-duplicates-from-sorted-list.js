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
var deleteDuplicates = function(head) {
    let sentinel = new ListNode(-Infinity);
    sentinel.next = head;
    let prev = sentinel;
    while(prev && prev.next){
        if(prev.val == prev.next.val){
            prev.next = prev.next.next;
        }
        else{
            prev = prev.next;
        }
    }
    return sentinel.next;
};