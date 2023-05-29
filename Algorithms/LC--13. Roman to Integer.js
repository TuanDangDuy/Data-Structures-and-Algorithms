const romanToInt = (s) => {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0  //init the first result is 0
    let preValue = 0    //variable storage previous value

    //loop from right to left
    for(let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]]     //get value of position i via step by step loop
        console.log(currentValue)
        if(currentValue >= preValue) {
            result += currentValue
        } else {
            result -= currentValue
        }

        preValue = currentValue     //update value previous to that current value
    }

    return result
}

console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("IV"));       // Output: 4
console.log(romanToInt("IX"));       // Output: 9
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994