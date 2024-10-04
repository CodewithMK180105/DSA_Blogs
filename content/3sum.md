---
title: "3 Sum"
description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets."
slug: "3sum"
date: "27-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727711522/three_sum_x6y88h.png"
---


## Problem: 3Sum (LeetCode)
The "3Sum" problem (LeetCode #15) asks you to find all unique triplets in the array that sum up to zero. The solution should avoid duplicate triplets, and the array can contain both positive and negative numbers.

## Problem Statement:
Given an integer array nums, return all the unique triplets [nums[i], nums[j], nums[k]] such that:

i, j, and k are distinct indices.
nums[i] + nums[j] + nums[k] == 0.
## Solution Overview:
To solve this problem efficiently, we use a sorted array and a two-pointer approach. Sorting helps in skipping duplicates and managing the two-pointer technique effectively.

## Approach:

**1.Sort the array:** Sorting helps us handle duplicates and efficiently use two pointers to find the triplets.

**2.Iterate through the array:** We loop through each element nums[i] and for each element, we apply the two-pointer technique to find two other elements that sum to -nums[i].

**3.Use two pointers:** After fixing nums[i], use two pointers: one starting from the next element j = i + 1 and the other from the end k = nums.size() - 1. Move the pointers inward based on the sum of the elements.

**4.Skip duplicates:** After finding a valid triplet, we skip any duplicate elements to ensure we only include unique triplets.

## Code Explanation:

```c showLineNumbers
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {

        vector<vector<int>> result; // To store the resulting triplets

        sort(nums.begin(), nums.end());  // Sort the array to apply two-pointer approach

        for(int i = 0; i < nums.size() - 2; i++) {

            // Skip duplicate values for the first element
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            int j = i + 1, k = nums.size() - 1;  // Two-pointer initialization
            while(j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                
                // If the sum is zero, we found a valid triplet
                if(sum == 0) {
                    result.push_back({nums[i], nums[j], nums[k]});

                    // Skip duplicates for the second and third elements
                    while(j < k && nums[j] == nums[j + 1]) j++;
                    while(j < k && nums[k] == nums[k - 1]) k--;

                    // Move both pointers inward after finding a triplet
                    j++;
                    k--;
                }
                // If the sum is less than zero, move the left pointer right to increase the sum
                else if(sum < 0) {
                    j++;
                }
                // If the sum is greater than zero, move the right pointer left to decrease the sum
                else {
                    k--;
                }
            }
        }
        return result;  // Return the list of triplets
    }
};
```
## Dry Run:
Let's walk through an example with nums = [-1, 0, 1, 2, -1, -4].

**Step 1:**

Sort the array: [-4, -1, -1, 0, 1, 2]

**Step 2:**

Start with i = 0, nums[i] = -4.

Set j = 1 and k = 5.

The sum is -4 + (-1) + 2 = -3. This is less than zero, so move j to 2.

The sum is -4 + (-1) + 2 = -3. Move j to 3.

The sum is -4 + 0 + 2 = -2. Move j to 4.

The sum is -4 + 1 + 2 = -1. Move j to 5. No triplet found.

**Step 3:**

Move to i = 1, nums[i] = -1.

Set j = 2 and k = 5.

The sum is -1 + (-1) + 2 = 0. Triplet found: [-1, -1, 2].

Skip duplicates for j and k and move inward. j = 3, k = 4.

The sum is -1 + 0 + 1 = 0. Triplet found: [-1, 0, 1].

**Step 4:**

Continue iterating, skipping duplicates and updating pointers. The result will include unique triplets: [-1, -1, 2] and [-1, 0, 1].

## Time Complexity:
**Time Complexity:** O(n²)

Sorting takes O(n log n), and we have a nested loop where two pointers traverse the array, resulting in an overall time complexity of O(n²).


**Space Complexity:** O(n)

We use a vector to store the result, and sorting the array requires additional space.

## Conclusion:
This solution efficiently finds all unique triplets that sum up to zero using sorting and the two-pointer approach. By skipping duplicates and moving pointers strategically, we reduce the time complexity to O(n²) compared to a brute-force solution, making it suitable for larger inputs.