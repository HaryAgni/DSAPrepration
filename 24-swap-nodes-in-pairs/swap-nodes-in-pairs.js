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
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let l1 = head;
    let l2 = head.next;
    let p1 = l1;
    let p2 = l2;
    while(p2){
        p1.next = p2.next;
        p1 = p2;
        p2 = p2.next;
    }
    let flag = true;
    p1 = l1;
    p2 = l2;
    let newhead = new ListNode();
    let node = newhead;
    while(p1 && p2){
        if(flag){
            node.next = p2;
            p2 = p2.next;
        }
        else{
            node.next = p1;
            p1=p1.next
        }
        flag = !flag;
        node = node.next

    }
    node.next = p1 || p2;

    return l2;

};