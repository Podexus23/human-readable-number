module.exports = function toReadable (number) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const decimal = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen']
  const tyth = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let dec = Math.floor(number/10)
  let hundreds = Math.floor(number/100)
  if(number<10){
      return numbers[number]
  }
  if(number<100 && number>=10){
      if(dec == 1) return decimal[number%10]
      if(number%10 == 0) return `${tyth[dec-2]}`
      return `${tyth[dec-2]} ${numbers[number%10]}`
  }
  if(number<1000 && number >=100){
    if(number%100 == 0) return `${numbers[hundreds]} hundred`
    return `${numbers[hundreds]} hundred ${toReadable(number%100)}`
  }
}

