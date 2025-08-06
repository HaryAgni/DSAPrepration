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
var hasCycle = function(head) {
    let curr = head;
    let arr = [curr];
    while(curr!=null){
        curr = curr.next;
        if(arr.includes(curr)){
            return true;
        }
        else{
            arr.push(curr);
        }
    }
    return false;
};