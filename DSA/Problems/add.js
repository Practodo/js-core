function add(n){
    var count = 0;
    // for(var i=1; i <= n; i++){
    //     count += i;
    // }
    console.log("start");
    count = n + add(n-1);
    if(n == 0)
        return count;
    console.log("End");
    return count;
}

console.log(add(5));