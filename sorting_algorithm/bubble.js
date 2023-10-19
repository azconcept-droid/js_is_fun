let array = [1, 100, -5, -2, 89]

let i = 0, j, temp;
function swap(a, b) {
    temp = a
    a = b
    b = temp
}
while (i < array.length) {
    for(j = 0; j < array.length; j++) {
        if (array[j] > array[j+1]) {
            swap(array[j], array[j+1])
        }
    }
    i++
}

console.log(array)