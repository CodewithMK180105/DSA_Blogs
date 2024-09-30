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