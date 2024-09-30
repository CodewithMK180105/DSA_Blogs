---
title: "Maximum Subarray"
description: "Given an integer array nums, find the subarray with the largest sum, and return its sum."
slug: "maximum-subarray"
date: "29-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727710914/maximum-subarray_azcztp.png"
---

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum=INT_MIN;
        int currSum=0;
        for(int i=0;i<nums.size();i++){
            currSum+=nums[i];
            maxSum=max(currSum,maxSum);
            if(currSum<0){
                currSum=0;
            }
        }
        return maxSum;
    }
};