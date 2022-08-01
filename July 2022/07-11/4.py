# 1160. Find Words That Can Be Formed by Characters
#
# You are given an array of strings words and a string chars.
#
# A string is good if it can be formed by characters from chars (each character can only be used once).
#
# Return the sum of lengths of all good strings in words.
#
#
#
# Example 1:
#
# Input: words = ["cat","bt","hat","tree"], chars = "atach"
# Output: 6
# Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
# Example 2:
#
# Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
# Output: 10
# Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
#
#
# Constraints:
#
# 1 <= words.length <= 1000
# 1 <= words[i].length, chars.length <= 100
# words[i] and chars consist of lowercase English letters.

class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        ans = 0
        tracker = {}
        for x in chars:
            if x in tracker:
                tracker[x] = tracker[x] + 1
            else:
                tracker[x] = 1
        for word in words:
            temp = ""
            for char in word:
                if char not in tracker:
                    break
                if word.count(char) <= tracker[char]:
                    temp += char
            if len(temp) == len(word):
                ans += len(temp)
        return ans