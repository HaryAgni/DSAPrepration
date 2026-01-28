/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 || !list2) return list1 || list2;
    let dummy = new ListNode();
    let p1 = list1;
    let p2 = list2;
    let curr = dummy;
    while (p1 || p2) {
        if ((p1 && p2 && p1.val < p2.val) || !p2) {
            curr.next = new ListNode(p1.val)
            p1 = p1.next;
        }
        else {
            curr.next = new ListNode(p2.val);
            p2 = p2.next;
        }
        curr = curr.next;
    }
    return dummy.next;
};