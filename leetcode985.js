// We have an array A of integers, and an array queries of queries.

// For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

// (Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

// Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

var sumEvenAfterQueries = function(A, queries) {
    let result = [];
    for(let i = 0; i < queries.length; i++){
        let sum = 0;
        A[queries[i][1]] = parseInt(A[queries[i][1]]) + parseInt([queries[i][0]]);
        for(let j = 0; j < A.length; j++) {
            if(A[j] % 2 == 0) {
                sum += A[j]
            }
        }
        result.push(sum)
    }
    return result
};