export default function longest_substring(str: string): string {
    let largestSubstring: string = "";
    let substring: string = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            substring += str[i];
        } else {
            if (substring.length > largestSubstring.length) {
                largestSubstring = substring;
            }
            substring = "";
        }
    }

    if (substring.length > largestSubstring.length) {
        largestSubstring = substring;
    }

    return largestSubstring;
}
