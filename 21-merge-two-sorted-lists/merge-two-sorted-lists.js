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
    let temp = new ListNode();
    let ans = temp;
    let p1 = list1;
    let p2 = list2;
    while (p1 || p2) {
        if ((p1 && p2 && p1.val < p2.val) || !p2) {
            temp.next = p1;
            p1 = p1.next;
        }
        else {
            temp.next = p2;
            p2 = p2.next;
        }
        temp = temp.next;
    }
    return ans.next;

};