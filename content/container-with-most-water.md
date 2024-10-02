---
title: "Container with most Water"
description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store."
slug: "container-with-most-water"
date: "25-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727706692/container-with-most-water_sbqlm3.png"
---

## Problem: Container With Most Water (LeetCode)

The "Container With Most Water" problem (LeetCode #11) asks you to find two lines from a given list of heights that together with the x-axis forms a container, such that the container holds the most water. The height of the container is determined by the shorter of the two lines.

## Problem Statement:

Given an array height of positive integers where each integer represents the height of a vertical line at that index, you need to determine the maximum area of water a container can store.

## Solution Overview:

The key idea is to use a two-pointer approach. We start with two pointers: one at the beginning (left) and the other at the end (right) of the array. The area between the two lines is calculated as:

Width = distance between the two pointers (right - left).
Height = the smaller of the two heights height[left] and height[right].
The area will be the product of these two values. We then move the pointer corresponding to the shorter line inward to try to find a larger area.

```c
class Solution {

public:

    int maxArea(vector<int>& height) {
        
        int left=0,right=height.size()-1;
        
        int max_area=0;
        
        while(left<right){
            int area=0;
            if(height[left]<height[right]){
                area=height[left]*(right-left);
                left++;
            }
            else{
                area=height[right]*(right-left);
                right--;
            }
            max_area=max(area,max_area);
        }
        return max_area;
    }
};
```

## Dry Run:

Let’s walk through the solution step by step using an example:
eg: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

**Initialization:**

left = 0, right = 8 (pointing to the first and last element).
max_area = 0.

**First Iteration:**

height[left] = 1, height[right] = 7.
Area = min(1, 7) * (8 - 0) = 1 * 8 = 8.
max_area = 8.
Since height[left] is smaller, move left to 1.

**Second Iteration:**

height[left] = 8, height[right] = 7.
Area = min(8, 7) * (8 - 1) = 7 * 7 = 49.
max_area = 49.
Since height[right] is smaller, move right to 7.

**Third Iteration:**

height[left] = 8, height[right] = 3.
Area = min(8, 3) * (7 - 1) = 3 * 6 = 18.
max_area = 49.
Move right to 6 since height[right] is smaller.


**Fourth Iteration:**

height[left] = 8, 
height[right] = 8
Area = min(8, 8) * (6 - 1) = 8 * 5 = 40.
max_area = 49.
Move right to 5.
The process continues until left meets right, updating the max_area at each step.

## Time Complexity:
**Time Complexity:** O(n)
We only pass through the list once using two pointers.

**Space Complexity:** O(1)
No additional space is used apart from a few variables.

## Explanation:
By always moving the pointer corresponding to the smaller height, we maximize the possibility of finding a larger area. This is because the area is constrained by the shorter height, and by moving one pointer, we hope to encounter taller lines while maintaining a reasonable width.
## Conclusion:
This solution efficiently finds the maximum area container using a two-pointer technique. The two-pointer approach reduces the time complexity from O(n²) (in a brute force solution) to O(n), making it optimal for large input sizes.