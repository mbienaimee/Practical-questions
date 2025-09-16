const checkingPalindrome =(str)=>{
    const arr = str.split('').reverse().join('')
    if(arr === str){
        return true
    }else{
        return false
    }
    
}
console.log(checkingPalindrome("abac"))