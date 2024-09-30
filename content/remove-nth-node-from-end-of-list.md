---
title: "Remove Nth Node From End of List"
description: "Given the head of a linked list, remove the nth node from the end of the list and return its head."
slug: "remove-nth-node-from-end-of-list"
date: "28-09-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727708588/remove-nth-node-from-end-of-list_ieestt.png"
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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if(head->next==NULL){ // For LL having only one node
            delete(head);
            return NULL;
        }

        ListNode* ptr1=head;
        ListNode* ptr2=head;
        while(n>0){
            ptr1=ptr1->next;
            n--;
        }

        if(ptr1==NULL){ // For LL having LL.length=n
            ListNode* newHead=head->next;
            delete(head);
            return newHead;
        }

        while(ptr1->next!=NULL){
            ptr1=ptr1->next;
            ptr2=ptr2->next;
        }
        ListNode* temp=ptr2->next;
        ptr2->next=temp->next;
        delete(temp);
        return head;
    }
};