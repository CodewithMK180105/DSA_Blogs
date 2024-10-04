---
title: "Merge Two Sorted Lists"
description: "You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list."
slug: "merge-two-sorted-lists"
date: "29-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727709243/merge-two-sorted-lists_vakzyv.png"
---

## Merge Two Sorted Linked Lists

In this post, we will explore how to merge two sorted linked lists into one sorted linked list. This problem is a common interview question that helps test your understanding of linked list manipulation.

## Problem Description

Given two sorted linked lists, list1 and list2, the task is to merge them into a new sorted linked list. The resulting list should be made by splicing together the nodes of the first two lists.

## Example

Consider the following two sorted linked lists:

list1: 1 → 2 → 4

list2: 1 → 3 → 4

The merged linked list should look like:

1 → 1 → 2 → 3 → 4 → 4

## Code Implementation

Here’s the C++ code that implements this merging logic:

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
 **/

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* ptr = new ListNode(); // Temporary node to hold the merged list
        ListNode* temp = ptr; // Pointer to track the last node of the merged list

        // Traverse both lists and append the smaller node to the merged list
        while (list1 != NULL && list2 != NULL) {
            if (list1->val < list2->val) {
                temp->next = list1; // Append list1's node
                list1 = list1->next; // Move to the next node in list1
            } else {
                temp->next = list2; // Append list2's node
                list2 = list2->next; // Move to the next node in list2
            }
            temp = temp->next; // Move to the last node of the merged list
        }

        // If there are remaining nodes in list1, append them
        while (list1 != NULL) {
            temp->next = list1;
            list1 = list1->next;
            temp = temp->next;
        }

        // If there are remaining nodes in list2, append them
        while (list2 != NULL) {
            temp->next = list2;
            list2 = list2->next;
            temp = temp->next;
        }

        return ptr->next; // Return the merged list, skipping the temporary head
    }
};
```
## Code Explanation

**1.Node Definition:**

The ListNode structure is defined, which has an integer value (val) and a pointer to the next node (next).

**2.Temporary Node:**

We create a temporary head node ptr to simplify the merging process. This node will help in constructing the new merged list.

**3.Merging Process:**

We loop through both linked lists (list1 and list2) until we reach the end of one of them. During each iteration, we compare the values of the nodes in both lists.

The smaller value node is appended to the merged list, and we move the corresponding pointer to its next node.

**4.Appending Remaining Nodes:**

Once one of the lists is fully traversed, we append the remaining nodes from the other list. This is done using two separate while loops, one for each list.

**5.Return Statement:**

Finally, we return ptr->next to skip the temporary head and get the actual merged list.

## Complexity Analysis

**Time Complexity:** O(m+n), where m and n are the lengths of the two linked lists. We traverse each list once.

**Space Complexity:** O(1). We use a constant amount of space, ignoring the space used by the input and output linked lists.

## Dry Run Example

Let’s perform a dry run of the function with the following input:

**Input:**

list1: 1 → 2 → 4

list2: 1 → 3 → 4

## Iteration Breakdown

**1.Initialization:**

ptr and temp point to a new temporary node.

**2.First Iteration:**

Compare 1 (from list1) and 1 (from list2). Both are equal.
Append 1 from list2 to the merged list.

Move temp to point to this new node, and advance list2 to 3.

**3.Second Iteration:**

Compare 1 (from list1) and 3 (from list2).

Append 1 from list1 to the merged list.

Move temp to this new node, and advance list1 to 2.

**4.Third Iteration:**

Compare 2 (from list1) and 3 (from list2).

Append 2 from list1 to the merged list.

Move temp to this new node, and advance list1 to 4.

**5.Fourth Iteration:**

Compare 4 (from list1) and 3 (from list2).

Append 3 from list2 to the merged list.

Move temp to this new node, and advance list2 to 4.

**6.Fifth Iteration:**

Compare 4 (from list1) and 4 (from list2).

Append 4 from list2 to the merged list.

Move temp to this new node, and advance list2 to NULL.

**7.Remaining Nodes:**

Now list2 is NULL. We append the remaining node 4 from list1 to the merged list.

## Final Output

The final output is the merged linked list:

1 → 1 → 2 → 3 → 4 → 4

## Conclusion

In this post, we examined how to merge two sorted linked lists into a single sorted linked list. We discussed the code implementation, analyzed its complexity, and performed a dry run to illustrate the algorithm's operation. This merging technique is efficient and straightforward, making it a valuable approach in various linked list problems.