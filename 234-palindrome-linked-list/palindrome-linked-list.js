/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let p1 = slow;
    let p2 = slow.next;
    while (p1 && p2) {
        let temp = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = temp;
    }
    slow.next = null;
    let a = head;
    let b = p1;
    while (b) {
        if (b.val !== a.val) return false;
        b = b.next;
        a = a.next;
    }
    return true;

};