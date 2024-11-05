---
title: "Maximum Number of Vowels in a Substring of Given Length"
description: "Given a string s and an integer k, return the maximum number of vowels in any substring of length k."
slug: "maximum-number-of-vowels-in-substring"
date: "03-11-24"
author: "Manishkumar Gupta"
image: "https://res.cloudinary.com/dffoynel3/image/upload/v1730620855/maximum-vowels-in-substring_t7u3pe.png"
---

## Problem: Maximum Number of Vowels in a Substring of Given Length (LeetCode #1456)

Given a string `s` and an integer `k`, this problem asks us to find the maximum number of vowel letters in any substring of `s` with length `k`. 

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

### Problem Statement

Given a string `s`, return the maximum number of vowels in any substring of length `k`.

**Examples:**
- **Input:** `s = "abciiidef"`, `k = 3`  
  **Output:** `3`  
  **Explanation:** The substring `"iii"` contains 3 vowels.

- **Input:** `s = "aeiou"`, `k = 2`  
  **Output:** `2`  
  **Explanation:** Any substring of length 2 contains 2 vowels.

- **Input:** `s = "leetcode"`, `k = 3`  
  **Output:** `2`  
  **Explanation:** `"lee"`, `"eet"`, and `"ode"` contain 2 vowels.

**Constraints:**
- \(1 \leq s.\text{length} \leq 10^5\)
- `s` consists of lowercase English letters.
- \(1 \leq k \leq s.\text{length}\)

## Solution Overview

We can solve this problem by using a sliding window technique to count vowels over each substring of length `k`. Using this approach, we efficiently count vowels in one pass of `s`.

### Approach

1. **Sliding Window:** Start by counting vowels in the first `k` characters of `s`.
2. **Window Slide:** For each subsequent character in `s`, slide the window to the right by one character:
   - Subtract the count if the outgoing character is a vowel.
   - Add to the count if the incoming character is a vowel.
3. **Track Maximum:** Update the maximum vowel count encountered during this process.

### Code Explanation

```cpp
class Solution {
public:
    bool isVowel(char ch) {
        ch = tolower(ch);
        return (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
    }

    int maxVowels(string s, int k) {
        int n = s.length();
        int st = 0, end = k - 1;
        int currVowelCount = 0;
        int maxVowelCount = INT_MIN;

        // Initial count of vowels in the first k-length substring
        for (int i = 0; i < k; i++) {
            if (isVowel(s[i])) currVowelCount++;
        }
        maxVowelCount = max(maxVowelCount, currVowelCount);

        // Sliding window over the rest of the string
        for (int i = 0; i < n - k; i++) {
            if (isVowel(s[st])) {
                currVowelCount--;
            }
            st++;
            end++;
            if (isVowel(s[end])) {
                currVowelCount++;
            }
            maxVowelCount = max(maxVowelCount, currVowelCount);
        }
        return maxVowelCount;
    }
};
```

## Dry Run

**Example:** `s = "abciiidef"`, `k = 3`

1. **Initial Count:** The substring `"abc"` has 1 vowel (`a`).
2. **Window Slide:** Slide the window one character at a time:
   - `"bci"` has 1 vowel.
   - `"cii"` has 2 vowels.
   - `"iii"` has 3 vowels (maximum).
   - Continue sliding with the rest of the string, resulting in a maximum of 3 vowels.
   
**Final Result:** `3`

## Complexity Analysis

- **Time Complexity:** \(O(n)\), where \(n\) is the length of `s`. We iterate over each character once.
- **Space Complexity:** \(O(1)\), as we use a constant amount of extra space.

## Conclusion

This solution efficiently finds the maximum number of vowels in any substring of length `k` by using a sliding window, enabling us to handle larger strings effectively.
