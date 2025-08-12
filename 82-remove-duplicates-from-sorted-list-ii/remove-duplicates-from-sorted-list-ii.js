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
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;
    let repeatedNode = new ListNode(-Infinity);
    let node = new ListNode();
    node.next = head;
    let prev = node;
    let curr = head;
    while (curr && curr.next) {
        if (curr.val == curr.next.val || repeatedNode.val == curr.val) {
            repeatedNode = curr;
        }
        else {
            prev.next = curr;
            prev = curr;
        }
        curr = curr.next;

    }
    prev.next = repeatedNode.val !== curr.val ? curr : null;
    return node.next;
};