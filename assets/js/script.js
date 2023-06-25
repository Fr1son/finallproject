const array = ['hello', 'my', 3, 4];

array.reduce((prevVal, currentVal, i, arr) => {
    console.log(prevVal, currentVal)
    return prevVal
}, 0)