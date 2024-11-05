# 2095. Delete the Middle Node of a Linked List

**Status:** Solved  
**Difficulty:** Medium  
**Topics:** Linked List  

## Problem Statement

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size `n` is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

### Examples

**Example 1:**

**Input:** head = [1,3,4,7,1,2,6]  
**Output:** [1,3,4,1,2,6]  
**Explanation:** Node 3 with value 7 is the middle node.

**Example 2:**

**Input:** head = [1,2,3,4]  
**Output:** [1,2,4]  
**Explanation:** Node 2 with value 3 is the middle node.

**Example 3:**

**Input:** head = [2,1]  
**Output:** [2]  
**Explanation:** Node 1 with value 1 is the middle node.

### Constraints

- The number of nodes in the list is in the range [1, 10^5].
- 1 <= Node.val <= 10^5

## Code Implementation

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {

        if(!head || !head->next) return NULL;

        ListNode* fast_ptr=head;
        ListNode* slow_ptr=head;
        ListNode* slow_prev=NULL;

        while(fast_ptr && fast_ptr->next){
            slow_prev=slow_ptr;
            fast_ptr=fast_ptr->next->next;
            slow_ptr=slow_ptr->next;
        }

        slow_prev->next=slow_ptr->next;
        return head;
    }
};
```

# Dry Run of Delete the Middle Node of a Linked List

**Example:** `head = [1, 3, 4, 7, 1, 2, 6]`

## Initial Pointers:

- `slow_ptr` points to the head (1).
- `fast_ptr` points to the head (1).
- `slow_prev` is `NULL`.

## Iterations:

### First Iteration:
- Move `slow_ptr` to the next node (3).
- Move `fast_ptr` to the node after next (4).
- Update `slow_prev` to point to the node with value 1.

### Second Iteration:
- Move `slow_ptr` to the next node (4).
- Move `fast_ptr` to the node after next (7).
- Update `slow_prev` to point to the node with value 3.

### Third Iteration:
- Move `slow_ptr` to the next node (7).
- Move `fast_ptr` to the node after next (1).
- Update `slow_prev` to point to the node with value 4.

### Fourth Iteration:
- Move `slow_ptr` to the next node (1).
- Move `fast_ptr` to the node after next (2).
- Update `slow_prev` to point to the node with value 7.

### Fifth Iteration:
- Move `slow_ptr` to the next node (2).
- Move `fast_ptr` to the node after next (6).
- Update `slow_prev` to point to the node with value 1.

### Sixth Iteration:
- Move `slow_ptr` to the next node (6).
- Move `fast_ptr` to `NULL`.

At this point, `slow_ptr` is the middle node (7).

## Remove Middle Node:
- Set `slow_prev->next` to `slow_ptr->next` (remove node with value 7).

## Final Result:
- The modified list is `[1, 3, 4, 1, 2, 6]`.

## Complexity Analysis

- **Time Complexity:** \( O(n) \), where \( n \) is the length of the linked list. We traverse the list once.
- **Space Complexity:** \( O(1) \), since we use only a constant amount of extra space.

## Conclusion

This solution effectively removes the middle node from the linked list using the two-pointer technique. This approach ensures that we only traverse the list once, making it efficient for larger lists.
