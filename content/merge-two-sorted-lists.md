---
title: "Merge Two Sorted Lists"
description: "ou are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list."
slug: "merge-two-sorted-lists"
date: "29-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727709243/merge-two-sorted-lists_vakzyv.png"
---

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* ptr=new ListNode();
        ListNode* temp=ptr;

        while(list1!=NULL && list2!=NULL){
            if(list1->val<list2->val){
                temp->next=list1;
                list1=list1->next;
            }
            else{
                temp->next=list2;
                list2=list2->next;
            }
            temp=temp->next;
        }
        while(list1!=NULL){
            temp->next=list1;
            list1=list1->next;
            temp=temp->next;
        }
        while(list2!=NULL){
            temp->next=list2;
            list2=list2->next;
            temp=temp->next;
        }
        return ptr->next;
    }
};