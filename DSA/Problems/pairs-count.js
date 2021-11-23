function getPairsCount(arr , n , k) {
    var m = new Map();
    var count = 0;

    for(var i=0; i< n; i++){
        m.set(arr[i], 1);
        if(m.has(k-arr[i]))
            count++;
    }
    console.log(m);

    // for (var i = 0; i < n; i++) {
    //     if (m.has(k - arr[i])) {
    //         count += m.get(k - arr[i]);
    //         console.log("k-arr[i]: "  + m.get(k - arr[i]));
    //     }
    //     console.log("Count: " + count);
    //     if (m.has(arr[i])) {
    //         m.set(arr[i], m.get(arr[i]) + 1);
    //     } else {
    //         m.set(arr[i], 1);
    //     }
    //     console.log(m);
    // }
    
    return count;
}

var arr = [ 1, 5, 7, -1, 8, -2, -3, 101, 110, 201, -95 ,9, 10, -4, 26, -20, 11, 18, -5];
var n = arr.length;
var sum = 6;

console.log(getPairsCount(arr, n, sum));