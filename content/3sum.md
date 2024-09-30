---
title: "3 Sum"
description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets."
slug: "3sum"
date: "27-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727711522/three_sum_x6y88h.png"
---

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {

        vector<vector<int>> result;

        sort(nums.begin(),nums.end());  // -4 -1 -1 0 1 2

        for(int i=0;i<nums.size()-2;i++){

            if(i>0 && nums[i]==nums[i-1]) continue;

            int j=i+1,k=nums.size()-1;
            while(j<k){
                if(nums[i]+nums[j]+nums[k]==0){
                    result.push_back({nums[i],nums[j],nums[k]});

                    while(j<k && nums[j]==nums[j+1]) j++;
                    while(j<k && nums[k]==nums[k-1]) k--;

                    j++;
                    k--;
                }
                else if(nums[i]+nums[j]+nums[k]<0){
                    j++;
                }
                else{
                    k--;
                }
            }
        }
        return result;
    }
};