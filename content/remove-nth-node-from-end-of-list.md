---
title: "Remove Nth Node From End of List"
description: "Given the head of a linked list, remove the nth node from the end of the list and return its head."
slug: "remove-nth-node-from-end-of-list"
date: "28-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727708588/remove-nth-node-from-end-of-list_ieestt.png"
---

## Remove N-th Node From End of List - C++ Solution

## Problem Statement

In this problem, we are given a singly-linked list and an integer n. The goal is to remove the N-th node from the end of the list and return the head of the modified linked list.

## For example:

**Input:**

head = [1,2,3,4,5]

n = 2

**Output:**

head = [1,2,3,5]

This means the second node from the end (node with value 4) should be removed.

## Approach

To solve this problem, we can use a two-pointer technique to find the node that is n nodes from the end in one pass. The idea is to maintain two pointers that are separated by n nodes and traverse the list. When the first pointer reaches the end, the second pointer will be at the node just before the target node.

## Algorithm Explanation

1. **Edge Case Handling:**

If the linked list contains only one node, we can delete the head and return NULL.

2. **Initialize Two Pointers:**

We initialize two pointers, ptr1 and ptr2, both pointing to the head of the linked list.

3. **Move the First Pointer ptr1:**

Move the first pointer ptr1 forward by n steps. This ensures that the second pointer ptr2 is n steps behind ptr1.

4. **Handle the Case Where the N-th Node is the Head:**

If ptr1 becomes NULL after moving n steps, it means the N-th node from the end is the head. In this case, we need to delete the head and return the new head, which will be the next node in the list.

5. **Move Both Pointers:**

Continue moving both ptr1 and ptr2 one step at a time until ptr1 reaches the last node. Now, ptr2 will point to the node just before the N-th node from the end.

6. **Delete the N-th Node:**

Remove the target node by updating ptr2->next to skip over the N-th node. Then, free the memory for the deleted node.

7. **Return the Head:**

Finally, return the head of the modified linked list.

## C++ Code Implementation

```c showLineNumbers
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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        // If the linked list has only one node, simply delete it and return NULL
        if (head->next == NULL) {
            delete(head);
            return NULL;
        }

        // Initialize two pointers, ptr1 and ptr2, both starting from the head
        ListNode* ptr1 = head;
        ListNode* ptr2 = head;

        // Move ptr1 n steps ahead so that ptr1 and ptr2 maintain a gap of n nodes
        while (n > 0) {
            ptr1 = ptr1->next;
            n--;
        }

        // If ptr1 reaches NULL, this means we need to remove the head
        if (ptr1 == NULL) {
            ListNode* newHead = head->next; // New head is the second node
            delete(head); // Delete the original head
            return newHead;
        }

        // Move both pointers one step at a time until ptr1 reaches the last node
        while (ptr1->next != NULL) {
            ptr1 = ptr1->next;
            ptr2 = ptr2->next;
        }

        // Now ptr2 is just before the node to be deleted. Remove the nth node.
        ListNode* temp = ptr2->next;
        ptr2->next = temp->next; // Bypass the node to be deleted
        delete(temp); // Delete the nth node from the end

        // Return the modified head of the linked list
        return head;
    }
};
```

## Dry Run

Let's take an example to better understand how the algorithm works.

**Input:**

head = [1, 2, 3, 4, 5], n = 2

**Step-by-Step Execution:**

**Initialize**

ptr1 = head, ptr2 = head.

**Move ptr1 forward by 2 steps:**

After 1st step: ptr1 = 2

After 2nd step: ptr1 = 3

**Now, move both pointers one step at a time:**

ptr1 = 4, ptr2 = 1

ptr1 = 5, ptr2 = 2

ptr1 = NULL, ptr2 = 3 (stops here)

**Now, ptr2->next is the node to be deleted (node with value 4).**

Update ptr2->next to skip the node with value 4, so the new list becomes:
head = [1, 2, 3, 5].

**Return the modified head.**

## Complexity Analysis

**Time Complexity:** O(L), where L is the length of the linked list. We traverse the linked list once.

**Space Complexity:** O(1), since we are using only constant extra space (for the two pointers).

## Conclusion

The above solution efficiently removes the N-th node from the end of a linked list in just one pass. The use of two pointers ensures that we can find and remove the node without needing extra space or multiple iterations. This technique is also versatile and can be applied to various problems involving linked lists.