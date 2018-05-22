// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
//
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
//
// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
//
// Example:
//
// Given n = 5
//
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
//
// Then 4 is the first bad version.

/**
 * @param {function} isBadVersion()
 * @return {function}
 */


var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let start = 1;
      let end = n;

      while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (isBadVersion(mid)) {
          end = mid;
        } else {
          start = mid;
        }
      }
      if (isBadVersion(start)) {
        return start;
      } else {
        return end;
      }
    };
};
