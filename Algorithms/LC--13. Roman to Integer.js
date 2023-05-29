//Solution 1
const romanToInt1 = (s) => {
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

console.log(romanToInt1("III"));      
console.log(romanToInt1("IV"));       
console.log(romanToInt1("IX"));       
console.log(romanToInt1("LVIII"));   
console.log(romanToInt1("MCMXCIV"));  






//Solution 2
const romanToInt2 = (s) => {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0

    for(let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]]
        const next = romanMap[s[i + 1]]

        if(next && current < next) {
            result -= current
        } else {
            result += current
        }
    }

    return result
}

console.log(romanToInt1("III"));      
console.log(romanToInt1("IV"));       
console.log(romanToInt1("IX"));       
console.log(romanToInt1("LVIII"));   
console.log(romanToInt1("MCMXCIV")); 