---
title: "Remove Element"
description: "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k."
slug: "remove-element"
date: "30-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727709861/remove-element_w5msec.png"
---

## Problem Statement

The removeElement problem is a common coding task where we are given an array nums and a value val. The goal is to remove all occurrences of val from nums in-place, meaning we should not use extra space for another array. The relative order of elements can be changed. It is also required to return the new length of the modified array after the removal.

## For example:

**Input:**

nums = [3,2,2,3]

val = 3

**Output:**

Length of modified array: 2

Modified array: [2, 2]

## Approach

This problem can be solved using the two-pointer technique. We traverse the array and shift non-val elements to the front of the array.

## Algorithm Explanation

We initialize a variable index to 0. This pointer keeps track of the position where the next valid element (i.e., not equal to val) will be placed.

We iterate through the array nums using a for loop. For each element, we check if it is equal to val.

If the current element is not equal to val, we assign it to the position index and increment index to prepare for the next valid element.

After completing the loop, the value of index represents the new length of the modified array, as all elements before this index are the ones not equal to val.

C++ Code Implementation

```c showLineNumbers
class Solution {
public:
    int removeElement(vector<int>& nums, int val){
        int index = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != val) {
                nums[index++] = nums[i];
            }
        }
        return index;
    }
};
```

## Dry Run

Let's go through a dry run of the algorithm with an example:

**Input:**

nums = [3, 2, 2, 3], val = 3

**Initialization**

index = 0.

**Iteration 1:**

i = 0, nums[0] = 3, which is equal to val. No assignment is made.

**Iteration 2:**

i = 1, nums[1] = 2, which is not equal to val. Assign nums[0] = nums[1], update index = 1.

**Iteration 3:**

i = 2, nums[2] = 2, which is not equal to val. Assign nums[1] = nums[2], update index = 2.

**Iteration 4:**

i = 3, nums[3] = 3, which is equal to val. No assignment is made.

At the end of the loop, the value of index is 2, and nums has been modified to [2, 2] with a new length of 2.

## Complexity Analysis

**Time Complexity:** O(n), where n is the size of the array. We traverse the entire array once.

**Space Complexity:** O(1), since we are modifying the array in-place without using extra space.

## Conclusion

The solution to the removeElement problem is efficient, as it operates in linear time and constant space. By using a simple two-pointer approach, we can easily remove all occurrences of a given value from an array while maintaining the relative order of the remaining elements.

This technique is quite versatile and can be applied to other similar problems involving in-place modifications of arrays.