//Solution 1
const isPalindrome1 = (x) => {
    //convert numer to string
    const str = String(x)

    //asign pointers to compare 2 pointers in string
    let left = 0
    let right = str.length - 1

    while (left < right) {
        //compare 2 pointers
        if(str[left] !== str[right]) {
            return false
        }

        //if they arenot compare, next move pointers
        left++
        right--
    }

    return true
}

console.log(isPalindrome1(121))



//Solution2
const isPalindrome2 = (x) => {
    const str = String(x)
    const reversedStr = str.split('').reverse().join('')

    //compare before and after of String
    return str === reversedStr
}

console.log(isPalindrome2(121))



//Solution 3
