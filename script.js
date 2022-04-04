let num1 = prompt('enter first number')
let num2 = prompt('enter second number')
let num3 = prompt('enter third number')
 

if (num1<num2<num3 ) {
   alert(num2)
}else if (num2<num3<num1) {
    alert(num3)
}else if (num3<num1<num2) {
    alert(num1)
}else if (num1>num2>num3) {
    alert(num2)
}else if (num2>num3>num1) {
    alert(num3)
} else if (num3>num1>num2) {
    alert(num1)
}