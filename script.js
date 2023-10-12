const arr = ["kutya", "cica", "mérési hiba"]

const numbers = [10, 20, 30, 40, 50]

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (const element of arr) {
    console.log(element)
} */

/* arr.forEach(function(element) {
    console.log(element)
}) */

numbers.forEach(function (number) {
    let newNumber = number * 2;
    console.log(newNumber)
    return newNumber

})

console.log(newNumber)