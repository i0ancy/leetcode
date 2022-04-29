/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return ""
    if (strs.length == 1) return strs[0];

    let longestPrefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(longestPrefix) != 0) {
            longestPrefix = longestPrefix.substring(0, longestPrefix.length - 1)
            if (longestPrefix == "") return ""
        }
    }
    return longestPrefix
}