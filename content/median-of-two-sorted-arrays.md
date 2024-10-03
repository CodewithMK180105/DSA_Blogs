---
title: "Median of Two Sorted Arrays"
description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n))."
slug: "median-of-two-sorted-arrays"
date: "26-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727707571/median-of-two-sorted-arrays_hjkegh.png"
---

## Median of Two Sorted Arrays

In this post, we'll tackle the problem of finding the Median of Two Sorted Arrays. This is a classic problem that often appears in coding interviews and requires a good understanding of binary search.

## Problem Description

Given two sorted arrays, nums1 and nums2, our goal is to find the median of the two sorted arrays. The median is the middle element in a sorted array, or the average of the two middle elements if the array has an even number of elements.

## Example

For instance, if we have:

nums1 = [1, 3] 

nums2 = [2]

The median is 2.0.

For the arrays:

nums1 = [1, 2]

nums2 = [3, 4]

The median is (2 + 3) / 2 = 2.5.

## Code Implementation

Here’s the C++ code that implements this logic using binary search:

```c
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Ensure nums1 is the smaller array
        if (nums1.size() > nums2.size()) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.size();
        int n = nums2.size();
        int low = 0;
        int high = m;

        while (low <= high) {
            int partitionX = (low + high) / 2; // Partition for nums1
            int partitionY = (n + m + 1) / 2 - partitionX; // Partition for nums2

            // Handling edge cases for partitions
            int maxLeftX = partitionX == 0 ? INT_MIN : nums1[partitionX - 1];
            int minRightX = partitionX == m ? INT_MAX : nums1[partitionX];

            int maxLeftY = partitionY == 0 ? INT_MIN : nums2[partitionY - 1];
            int minRightY = partitionY == n ? INT_MAX : nums2[partitionY];

            // Check if we have partitioned correctly
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                // Even combined length
                if ((m + n) % 2 == 0) {
                    return (double)(max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0;
                } else { // Odd combined length
                    return (double)max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) { // Move towards the left in nums1
                high = partitionX - 1;
            } else { // Move towards the right in nums1
                low = partitionX + 1;
            }
        }
        throw invalid_argument("Input arrays are not sorted.");
    }
};
```

### Code Explanation

**1.Ensuring Array Order:**

We first check if nums1 is larger than nums2. If so, we swap them to ensure that nums1 is the smaller array. This simplifies the binary search.

**2.Initialization:**

We get the sizes of both arrays, m and n, and initialize our binary search bounds: low and high.

**3.Binary Search:**

We perform a binary search on nums1 to find the correct partition such that the left side of the partition contains elements less than or equal to the right side.

**4.Partition Calculation:**

For each partition in nums1, we calculate the corresponding partition in nums2. We also find the maximum and minimum values on both sides of the partitions.

**5.Checking Conditions:**

If the maximum of the left side of nums1 is less than or equal to the minimum of the right side of nums2, and vice versa, we have found the correct partitions.

Depending on whether the total length of the combined arrays is odd or even, we compute the median.

**6.Adjusting Partitions:**

If the partition is not correct, we adjust our search range by moving either left or right based on the comparison of the maximum and minimum values.

**7.Return Value:**

Finally, we return the computed median.

## Complexity Analysis

**Time Complexity:** O(log(min(m,n))), where m and n are the sizes of the two arrays. We perform a binary search on the smaller array.

**Space Complexity:** O(1). We use a constant amount of extra space for variables.

## Dry Run Example

Let’s perform a dry run of the function with the following input:

**Input:**

nums1: [1, 3]

nums2: [2]

## Iteration Breakdown

**Initialization:**

m = 2, n = 1, low = 0, high = 2.

**First Iteration:**

partitionX = (0 + 2) / 2 = 1

partitionY = (1 + 2 + 1) / 2 - 1 = 1

**Partitions:**

maxLeftX = nums1[0] = 1

minRightX = nums1[1] = 3

maxLeftY = nums2[0] = 2

minRightY = INT_MAX

Check: 1 <= INT_MAX and 2 <= 3 (True).

**Median Calculation:**

Combined length is odd → return max(1, 2) = 2.

**Final Output**

The final output is 2.0, which is the median of the two sorted arrays.

## Conclusion

In this post, we examined how to find the median of two sorted arrays using an efficient binary search approach. We discussed the code implementation, analyzed its complexity, and performed a dry run to illustrate the algorithm's operation. This approach provides a way to find the median in logarithmic time, making it optimal for large datasets.