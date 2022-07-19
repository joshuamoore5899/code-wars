// 21. Merge Two Sorted Lists
//
// You are given the heads of two sorted linked lists list1 and list2.
//
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
// Return the head of the merged linked list.
//
//
//
// Example 1:
//
//
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
//
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
//
// Input: list1 = [], list2 = [0]
// Output: [0]
//
//
// Constraints:
//
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

var mergeTwoLists = function(list1, list2) {
    let head;
    if (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            head = list1;
            firstVal = list1.next;
            secondVal = list2;
        }
        else {
            head = list2;
            firstVal = list2.next;
            secondVal = list1;
        }
        let ans = head;
        while (firstVal != null || secondVal != null) {
            if (firstVal === null && secondVal != null) {
                head.next = secondVal;
                secondVal = secondVal.next;
            }
            else if (secondVal === null && firstVal != null) {
                head.next = firstVal;
                firstVal = firstVal.next;
            }
            else {
                if (firstVal.val < secondVal.val) {
                    head.next = firstVal;
                    firstVal = firstVal.next;
                }
                else {
                    head.next = secondVal;
                    secondVal = secondVal.next;
                }
            }
            head = head.next;
        }
        return ans;
    }
    else {
        if (list1 === null && list2 === null) {
            return null
        }
        else if (list1 === null) {
            return list2;
        }
        else {
            return list1;
        }
    }
};
