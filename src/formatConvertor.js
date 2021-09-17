const arrayUp = (arr)=>{
    return parseInt(arr.join(''));
}

const decimalToBinaryConvertor = (number)=>{
    let decimalDigitsAsArrays = []
    while(number > 0){
        decimalDigitsAsArrays.push(number % 2)
        number = Math.floor(number / 2)
    }
    decimalDigitsAsArrays =  decimalDigitsAsArrays.reverse()
    return arrayUp(decimalDigitsAsArrays)
}

console.log(decimalToBinaryConvertor(24569))