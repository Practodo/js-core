function binary(arr, first, last, pivot){
    var mid = Math.floor(first + ((last - first)/2));
    console.log("pivot: " + mid);
    while(first <= last) {
        if(pivot === arr[mid])
            return "element found at index: " + mid;
        if(pivot < arr[mid])
            return binary(arr, first, mid -1, pivot);
        if(pivot > arr[mid])
            return binary(arr, mid + 1, last, pivot);
    }
    return "Element not found!";
}

var array = [2, 5, 12, 13, 24, 34, 56];
console.log(binary(array, 0, array.length-1, 56));