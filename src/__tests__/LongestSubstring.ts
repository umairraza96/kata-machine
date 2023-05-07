import longest_substring from "@code/LongestSubstring";

test("Longest substring", function () {
    expect(longest_substring("ABCDDDEFGHI")).toEqual("DEFGHI");
    expect(longest_substring("abcdefghhhaaad")).toEqual("abcdefg");
    expect(longest_substring("mynameisumair")).toEqual("mynameisumair");
});
