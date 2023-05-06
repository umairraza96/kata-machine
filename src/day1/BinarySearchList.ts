export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length;
    while (left < right) {
        // let mid = Math.floor(left + (right - left) / 2);
        let mid = Math.floor((left + right) / 2);
        let value = haystack[mid];

        if (needle === value) {
            return true
        } else if (needle > value) {
            left = mid + 1;
        } else {
            right = mid
        }
    }

    return false;
}
