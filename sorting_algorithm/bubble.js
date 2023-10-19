let array = [1, 100, -5, -2, 89]

let i = 0, j, temp;

while (i < array.length) {
    for(j = 0; j < array.length; j++) {
        if (array[j] > array[j+1]) {
            temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
    }
    i++
}

console.log(array)