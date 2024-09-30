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

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int count=1;
        int index=1;
        for(int i=1;i<nums.size();i++){
            if(nums[i]==nums[i-1]){
                continue;
            }
            else{
                nums[index++]=nums[i];
                count++;
            }
        }
        return index;
    }
};