---
title: "Remove Duplicates from Sorted Array"
description: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k."
slug: "remove-duplicates-from-sorted-array"
date: "30-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727709593/remove-duplicates-from-sorted-array_dkxtgj.png"
---

## Remove Duplicates from Sorted Array

In this post, we will explore an efficient way to remove duplicates from a sorted array. This problem is frequently encountered in coding interviews and tests your ability to manipulate arrays effectively.

## Problem Description

Given a sorted array of integers, the task is to remove the duplicates in-place such that each unique element appears only once. The function should return the new length of the array after removing duplicates. The relative order of the elements should be preserved.

## Example

Consider the following sorted array:

Input: nums = [1, 1, 2]

Output: 2 (The first two elements of nums will now contain 1 and 2.)

## Code Implementation

Here’s the C++ code that implements this logic:

```c showLineNumbers
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int count = 1; // Count of unique elements
        int index = 1; // Index for placing the next unique element

        // Traverse the sorted array
        for (int i = 1; i < nums.size(); i++) {
            // If the current element is not equal to the previous one
            if (nums[i] != nums[i - 1]) {
                nums[index++] = nums[i]; // Place it in the unique position
                count++; // Increment the count of unique elements
            }
        }
        return index; // Return the length of the unique elements
    }
};
```

## Code Explanation

1. **Initialization:**

We start by initializing two variables: count, which tracks the number of unique elements (initialized to 1, assuming the first element is unique), and index, which is set to 1, indicating the position to place the next unique element.

2. **Loop Through the Array:**

We loop through the array starting from the second element (index 1). For each element, we compare it with the previous element.

3. **Check for Duplicates:**

If the current element (nums[i]) is not equal to the previous element (nums[i - 1]), it indicates that we have found a unique element.

We place this unique element at the index position and increment both index and count.

4. **Return Statement:**

After the loop, we return index, which represents the new length of the array after removing duplicates.

## Complexity Analysis

**Time Complexity:** O(n), where n is the number of elements in the input array. We traverse the array only once.

**Space Complexity:** O(1). We modify the input array in-place, using a constant amount of extra space for variables.

## Dry Run Example

Let’s perform a dry run of the function with the following input:

Input: nums = [0, 0, 1, 1, 2, 2, 3, 4, 4]

## Iteration Breakdown

**1.Initialization:**

count = 1

index = 1

**2.First Iteration (i = 1):**

Compare nums[1] (0) with nums[0] (0): they are equal.

No change, move to the next iteration.

**3.Second Iteration (i = 2):**

Compare nums[2] (1) with nums[1] (0): they are different.

Place 1 at index 1: nums[1] = 1.

Increment index to 2 and count to 2.

**4.Third Iteration (i = 3):**

Compare nums[3] (1) with nums[2] (1): they are equal.

No change, move to the next iteration.

**5.Fourth Iteration (i = 4):**

Compare nums[4] (2) with nums[3] (1): they are different.

Place 2 at index 2: nums[2] = 2.

Increment index to 3 and count to 3.

**6.Fifth Iteration (i = 5):**

Compare nums[5] (2) with nums[4] (2): they are equal.

No change, move to the next iteration.

**7.Sixth Iteration (i = 6):**

Compare nums[6] (3) with nums[5] (2): they are different.

Place 3 at index 3: nums[3] = 3.

Increment index to 4 and count to 4.

**8.Seventh Iteration (i = 7):**

Compare nums[7] (4) with nums[6] (3): they are different.

Place 4 at index 4: nums[4] = 4.

Increment index to 5 and count to 5.

**9.Eighth Iteration (i = 8):**

Compare nums[8] (4) with nums[7] (4): they are equal.

No change, move to the next iteration.

## Final Output

The final output is the new length of the array, which is 5. The modified array contains unique elements at the beginning:

nums = [0, 1, 2, 3, 4, ...] (Only the first 5 elements matter)

## Conclusion

In this post, we explored how to remove duplicates from a sorted array efficiently. We discussed the code implementation, analyzed its complexity, and performed a dry run to illustrate the algorithm's operation. This technique is valuable for many array manipulation problems and is essential to understand for coding interviews.


