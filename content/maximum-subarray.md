---
title: "Maximum Subarray"
description: "Given an integer array nums, find the subarray with the largest sum, and return its sum."
slug: "maximum-subarray"
date: "29-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727710914/maximum-subarray_azcztp.png"
---

## Maximum Subarray Problem
In this post, we'll explore the solution to the Maximum Subarray Problem, which involves finding the contiguous subarray within a one-dimensional array of numbers that has the largest sum. This is a common problem in coding interviews and algorithm challenges.

## Problem Description
Given an integer array nums, our task is to find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

## Example
For example, given the array [-2,1,-3,4,-1,2,1,-5,4], the maximum sum of the contiguous subarray is 6, derived from the subarray [4,-1,2,1].

## Code Implementation
Here’s the C++ code that implements this logic using Kadane's Algorithm:

```c showLineNumbers
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = INT_MIN; // Initialize maxSum to the smallest possible integer
        int currSum = 0; // Initialize current sum to zero
        
        // Iterate through the array
        for (int i = 0; i < nums.size(); i++) {
            currSum += nums[i]; // Add the current element to currSum
            maxSum = max(currSum, maxSum); // Update maxSum if currSum is greater
            
            // If currSum becomes negative, reset it to zero
            if (currSum < 0) {
                currSum = 0; 
            }
        }
        return maxSum; // Return the maximum sum found
    }
};
```

## Code Explanation

**Initialization:**

maxSum is initialized to the smallest possible integer value to ensure that any sum will be larger than this initial value.

currSum keeps track of the sum of the current subarray.

**Iteration:**

We loop through each element of the nums array, adding each element to currSum.

After updating currSum, we check if it exceeds maxSum and update maxSum accordingly.

**Resetting currSum:**

If currSum becomes negative, we reset it to zero. This means that starting a new subarray from the next element may yield a higher sum.

**Return Value:**

Finally, we return maxSum, which contains the largest sum of all contiguous subarrays.

## Complexity Analysis

**Time Complexity:** O(n), where n is the number of elements in the nums array. We traverse the array once.

**Space Complexity:** O(1). We use a constant amount of space for the variables maxSum and currSum.

## Dry Run Example

Let's perform a dry run of the function with the following input:

**Input:**

nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

## Iteration Breakdown

**Initialization:**

maxSum = INT_MIN

currSum = 0

**First Iteration (i=0):**

currSum += -2 → currSum = -2

maxSum = max(-2, INT_MIN) → maxSum = -2

Since currSum < 0, reset currSum to 0.

**Second Iteration (i=1):**

currSum += 1 → currSum = 1

maxSum = max(1, -2) → maxSum = 1

**Third Iteration (i=2):**

currSum += -3 → currSum = -2

maxSum = max(-2, 1) → maxSum = 1

Reset currSum to 0.

**Fourth Iteration (i=3):**

currSum += 4 → currSum = 4

maxSum = max(4, 1) → maxSum = 4

**Fifth Iteration (i=4):**

currSum += -1 → currSum = 3

maxSum = max(3, 4) → maxSum = 4

**Sixth Iteration (i=5):**

currSum += 2 → currSum = 5

maxSum = max(5, 4) → maxSum = 5

**Seventh Iteration (i=6):**

currSum += 1 → currSum = 6

maxSum = max(6, 5) → maxSum = 6

**Eighth Iteration (i=7):**

currSum += -5 → currSum = 1

maxSum = max(1, 6) → maxSum = 6

**Ninth Iteration (i=8):**

currSum += 4 → currSum = 5

maxSum = max(5, 6) → maxSum = 6

## Final Output

The final output is 6, which is the maximum sum of the contiguous subarray [4, -1, 2, 1].

## Conclusion

In this post, we examined the Maximum Subarray Problem and explored an efficient solution using Kadane's Algorithm. We discussed the code implementation, analyzed its complexity, and performed a dry run to illustrate how the algorithm works. This approach effectively finds the maximum sum of contiguous subarrays in linear time.