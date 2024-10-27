// import fs from "fs";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { notFound } from "next/navigation";

// Define the structure of your post data
interface Post {
    title: string;
    description: string;
    date: string;
    author: string;
    image: string;
    content: string;
}

// Define posts as a record of slugs to Post objects
const posts: Record<string, Post> = {
    "3sum": {
        title: "3 Sum",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    date: "27-09-24",
    author: "Manishkumar Gupta",
    image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727711522/three_sum_x6y88h.png",
    content: `
## Problem: 3Sum (LeetCode)
The "3Sum" problem (LeetCode #15) asks you to find all unique triplets in the array that sum up to zero. The solution should avoid duplicate triplets, and the array can contain both positive and negative numbers.

## Problem Statement:
Given an integer array nums, return all the unique triplets [nums[i], nums[j], nums[k]] such that:
- i, j, and k are distinct indices.
- nums[i] + nums[j] + nums[k] == 0.

## Solution Overview:
To solve this problem efficiently, we use a sorted array and a two-pointer approach. Sorting helps in skipping duplicates and managing the two-pointer technique effectively.

## Approach:

**1. Sort the array:** Sorting helps us handle duplicates and efficiently use two pointers to find the triplets.

**2. Iterate through the array:** We loop through each element nums[i] and for each element, we apply the two-pointer technique to find two other elements that sum to -nums[i].

**3. Use two pointers:** After fixing nums[i], use two pointers: one starting from the next element j = i + 1 and the other from the end k = nums.size() - 1. Move the pointers inward based on the sum of the elements.

**4. Skip duplicates:** After finding a valid triplet, we skip any duplicate elements to ensure we only include unique triplets.

## Code Explanation:

\`\`\`cpp
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
                } else if(sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }
        return result;  // Return the list of triplets
    }
};
\`\`\`

## Dry Run:
Let's walk through an example with nums = [-1, 0, 1, 2, -1, -4].

**Step 1:** Sort the array: [-4, -1, -1, 0, 1, 2]

**Step 2:** Start with i = 0, nums[i] = -4. Set j = 1 and k = 5.
- The sum is -4 + (-1) + 2 = -3. This is less than zero, so move j to 2.
- The sum is -4 + (-1) + 2 = -3. Move j to 3.
- The sum is -4 + 0 + 2 = -2. Move j to 4.
- The sum is -4 + 1 + 2 = -1. Move j to 5. No triplet found.

**Step 3:** Move to i = 1, nums[i] = -1. Set j = 2 and k = 5.
- The sum is -1 + (-1) + 2 = 0. Triplet found: [-1, -1, 2].
- Skip duplicates for j and k and move inward. j = 3, k = 4.
- The sum is -1 + 0 + 1 = 0. Triplet found: [-1, 0, 1].

**Step 4:** Continue iterating, skipping duplicates and updating pointers. The result will include unique triplets: [-1, -1, 2] and [-1, 0, 1].

## Time Complexity:
**Time Complexity:** O(n²)
Sorting takes O(n log n), and we have a nested loop where two pointers traverse the array, resulting in an overall time complexity of O(n²).

**Space Complexity:** O(n)
We use a vector to store the result, and sorting the array requires additional space.

## Conclusion:
This solution efficiently finds all unique triplets that sum up to zero using sorting and the two-pointer approach. By skipping duplicates and moving pointers strategically, we reduce the time complexity to O(n²) compared to a brute-force solution, making it suitable for larger inputs.
`
    },
    "add-two-numbers": {
        title: "Adding Two Numbers Represented by Linked Lists",
    description: "Given two non-empty linked lists representing two non-negative integers, where the digits are stored in reverse order, return the sum as a linked list.",
    date: "27-09-24",
    author: "Manishkumar Gupta",
    image: "https://res.cloudinary.com/dffoynel3/image/upload/v1727711522/adding_two_numbers.png",
    content: `## Problem Description

Given two non-empty linked lists representing two non-negative integers, where the digits are stored in reverse order, we need to add the two numbers and return the sum as a linked list. Each node in the linked list represents a single digit.

## Example

For instance, the linked list **2 -> 4 -> 3** represents the number **342**, and **5 -> 6 -> 4** represents **465**. The expected output is the linked list **7 -> 0 -> 8**, which represents the number **807**.

## Code Implementation

Here’s the C++ code that implements this logic:

\`\`\`cpp
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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* head = new ListNode(); // Dummy head to simplify the result construction
        ListNode* temp = head; // Pointer to track the current node in the result
        int carry = 0; // Initialize carry to zero

        // Loop until both lists are exhausted and there's no carry left
        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int sum = carry; // Start with carry for this iteration
            
            // Add value from l1 if it's available
            if (l1 != nullptr) {
                sum += l1->val;
                l1 = l1->next; // Move to the next node in l1
            }
            
            // Add value from l2 if it's available
            if (l2 != nullptr) {
                sum += l2->val;
                l2 = l2->next; // Move to the next node in l2
            }
            
            carry = sum / 10; // Update carry for next iteration
            temp->next = new ListNode(sum % 10); // Create a new node with the current digit
            temp = temp->next; // Move to the new node
        }

        return head->next; // Return the next of dummy head
    }
};
\`\`\`

## Code Explanation

**1. ListNode Structure:** The ListNode struct defines the nodes of the linked list. Each node contains an integer value (val) and a pointer to the next node (next).

**2. Dummy Head Node:** A dummy head node is created to facilitate the construction of the result linked list. This simplifies the process since we don’t need to handle special cases for the head node separately.

**3. Carry Variable:** We maintain a carry variable to store any overflow that results from the addition of two digits.

**4. Main Loop:** The main loop continues until both linked lists are fully processed and there is no carry left:

- The sum variable is initialized with the current value of carry.
- We check if l1 and l2 have remaining nodes, adding their values to sum if they do.
- The carry is updated based on the total sum, and a new node is created with the current digit (sum % 10), which is then added to the result.

**5. Return Statement:** Finally, we return head->next to skip the dummy node and return the actual result.

## Complexity Analysis

**Time Complexity:** O(max(m,n)), where m and n are the lengths of the two linked lists. We may need to traverse both lists completely.

**Space Complexity:** O(max(m,n)) for the resulting linked list, which can be as long as the longer input list plus one for the carry.

## Dry Run Example

Let's perform a dry run of the function with the following input:

**Input:**

l1: 2 -> 4 -> 3 (represents the number 342)

l2: 5 -> 6 -> 4 (represents the number 465)

## Iteration Breakdown

**Initialization:**

carry = 0

head points to a new dummy node.

**First Iteration:**

sum = 0 + 2 + 5 = 7

carry = 0

Result: 7 (temp points to the new node with value 7)

**Second Iteration:**

sum = 0 + 4 + 6 = 10

carry = 1

Result: 7 -> 0 (temp points to the new node with value 0)

**Third Iteration:**

sum = 1 + 3 + 4 = 8

carry = 0

Result: 7 -> 0 -> 8 (temp points to the new node with value 8)

**End of Iterations:**

Both lists are exhausted, and there is no carry left.

## Final Output

The final output linked list represents the number 807:

**Output:** 7 -> 0 -> 8

## Conclusion

In this blog post, we examined the problem of adding two numbers represented by linked lists and discussed a solution implemented in C++. We explored the code step-by-step, analyzed its complexity, and performed a dry run to visualize how the algorithm works. This solution efficiently handles the addition of numbers using the properties of linked lists. If you have any questions or comments, feel free to reach out!`

    }
};

// Page component
interface PageProps {
    params: {
        slug: string;
    };
}

export default async function Page({ params }: PageProps) {
    const post = posts[params.slug];

    if (!post) {
        notFound();
    }

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: post.title })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: "one-dark-pro",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3000,
                }),
            ],
        });

    const htmlContent = (await processor.process(post.content)).toString();

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg mb-2 border-l-4 border-gray-500 pl-4 italic">
                &quot;{post.description}&quot;
            </p>
            <div className="flex gap-2 italic">
                <p className="text-sm text-gray-500 mb-4">By {post.author}</p>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="prose dark:prose-invert"
            ></div>
        </div>
    );
}
