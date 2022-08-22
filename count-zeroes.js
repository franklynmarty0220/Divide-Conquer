function countZeroes(arr)  {
    let count = 0;
    for (let i in arr) {
        if (arr[i] === 0 && arr[i] === parseInt(arr[i], 10)) {
            count += 1;
        }
    }
    return count;
  
}

module.exports = countZeroes