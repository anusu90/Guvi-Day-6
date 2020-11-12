let string = 'abcba';




let n = string.length, array =[]
function isPalindrome (x) {
    return (x === x.split('').reverse().join(''))
}

for (i=1; i<=n; i++){
    temp = string;
    for (j=0;j<=n-i;j++){
        temp = string.slice(j,j+i);
        array.push(temp)
    }
}
palindromes = array.filter(v => (isPalindrome(v) && v.length > 1)).join(' ')
console.log(palindromes)
