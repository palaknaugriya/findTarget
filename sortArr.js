function findPair(arr, n, sum) {

    // maintain two indices pointing to endpoints of the array
    let low = 0
    let high = n - 1

    // reduce the search space `arr[low…high]` at each iteration of the loop

    // loop till the search space is exhausted
    while (low < high) {
        // sum found
        if (arr[low] + arr[high] == sum) {
            return ([low, high])
        }

        // increment `low` index if the total is less than the desired sum;
        // decrement `high` index if the total is more than the desired sum
        (arr[low] + arr[high] < sum) ? low++ : high--
    }

    // we reach here if the pair is not found
    console.log("Pair not found")
}


let arr = [2, 5, 9, 11]
let target = 11
console.log(findPair(arr, arr.length, target))