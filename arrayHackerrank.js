// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in ,
// then print the maximum hourglass sum.

function hourglassSum(arr) {
    let totals = [];
    let sum = 0;
    let reducer = (acc, curr) => Math.max(acc, curr)
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            sum += arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            sum += arr[i + 1][j + 1];
            sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            totals.push(sum)
            sum = 0;
        }
    }
    return totals.reduce(reducer)
}