function isPalindrome(word) {

    if (word.length <= 1) {
        return true;
    }

   
    if (word[0] === word[word.length - 1]) {
        return isPalindrome(word.slice(1, -1));
    } else {
        return false;
    }
}


console.log(isPalindrome("gag"));     // true
console.log(isPalindrome("kayak"));   // true
console.log(isPalindrome("php"));     // false
console.log(isPalindrome("radar"));   // true
