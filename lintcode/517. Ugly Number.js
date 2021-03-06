// 517. Ugly Number
// Write a program to check whether a given number is an ugly number`.
//
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
//
// Example
// Given num = 8 return true
// Given num = 14 return false
/**
 * @param num: An integer
 * @return: true if num is an ugly number or false
 */
const isUgly = function (num) {
    if (num < 1) {
        return false;
    }

    while (num % 2 === 0) {
        num = num / 2;
    }
    while (num % 3 === 0) {
        num = num / 3;
    }
    while (num % 5 === 0) {
        num = num / 5;
    }

    return num === 1;
}
