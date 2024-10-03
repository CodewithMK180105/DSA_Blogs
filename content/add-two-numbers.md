---
title: "Add Two Numbers"
description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list."
slug: "add-two-numbers"
date: "24-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727711953/add-two-numbers_b4bq3a.png"
---

## Adding Two Numbers Represented by Linked Lists

In this post, we'll discuss how to add two numbers represented by linked lists in reverse order. Each linked list node contains a single digit, and the digits are stored in reverse order, making it easier to perform addition similar to how we do it manually.

## Problem Description

Given two non-empty linked lists representing two non-negative integers, where the digits are stored in reverse order, we need to add the two numbers and return the sum as a linked list. Each node in the linked list represents a single digit.

## Example

For instance, the linked list 2 -> 4 -> 3 represents the number 342, and 5 -> 6 -> 4 represents 465. The expected output is the linked list 7 -> 0 -> 8, which represents the number 807.

Code Implementation
Here’s the C++ code that implements this logic:

```c
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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* head = new ListNode(); // Dummy head to simplify the result construction
        ListNode* temp = head; // Pointer to track the current node in the result
        int carry = 0; // Initialize carry to zero

        // Loop until both lists are exhausted and there's no carry left
        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int sum = carry; // Start with carry for this iteration
            
            // Add value from l1 if it's available
            if (l1 != nullptr) {
                sum += l1->val;
                l1 = l1->next; // Move to the next node in l1
            }
            
            // Add value from l2 if it's available
            if (l2 != nullptr) {
                sum += l2->val;
                l2 = l2->next; // Move to the next node in l2
            }
            
            carry = sum / 10; // Update carry for next iteration
            temp->next = new ListNode(sum % 10); // Create a new node with the current digit
            temp = temp->next; // Move to the new node
        }

        return head->next; // Return the next of dummy head
    }
};
```

## Code Explanation
**1.ListNode Structure:** The ListNode struct defines the nodes of the linked list. Each node contains an integer value (val) and a pointer to the next node (next).

**2.Dummy Head Node:** A dummy head node is created to facilitate the construction of the result linked list. This simplifies the process since we don’t need to handle special cases for the head node separately.

**3.Carry Variable:** We maintain a carry variable to store any overflow that results from the addition of two digits.

**4.Main Loop:** The main loop continues until both linked lists are fully processed and there is no carry left:

The sum variable is initialized with the current value of carry.

We check if l1 and l2 have remaining nodes, adding their values to sum if they do.

The carry is updated based on the total sum, and a new node is created with the current digit (sum % 10), which is then added to the result list.

**5.Return Statement:** Finally, we return head->next to skip the dummy node and return the actual result.

## Complexity Analysis

**Time Complexity:** O(max(m,n)), where m and n are the lengths of the two linked lists. We may need to traverse both lists completely.

**Space Complexity:** O(max(m,n)) for the resulting linked list, which can be as long as the longer input list plus one for the carry.

## Dry Run Example
Let's perform a dry run of the function with the following input:

**Input:**

l1: 2 -> 4 -> 3 (represents the number 342)

l2: 5 -> 6 -> 4 (represents the number 465)

## Iteration Breakdown

**Initialization:**

carry = 0

head points to a new dummy node.

**First Iteration:**

sum = 0 + 2 + 5 = 7

carry = 0

Result: 7 (temp points to the new node with value 7)

**Second Iteration:**

sum = 0 + 4 + 6 = 10

carry = 1

Result: 7 -> 0 (temp points to the new node with value 0)

**Third Iteration:**

sum = 1 + 3 + 4 = 8

carry = 0

Result: 7 -> 0 -> 8 (temp points to the new node with value 8)

**End of Iterations:**

Both lists are exhausted, and there is no carry left.


## Final Output
The final output linked list represents the number 807:

**Output:** 7 -> 0 -> 8


## Conclusion
In this blog post, we examined the problem of adding two numbers represented by linked lists and discussed a solution implemented in C++. We explored the code step-by-step, analyzed its complexity, and performed a dry run to visualize how the algorithm works. This solution efficiently handles the addition of numbers using the properties of linked lists. If you have any questions or comments, feel free to reach out!

