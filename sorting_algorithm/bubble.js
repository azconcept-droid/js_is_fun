let array = [1, 100, -5, -2, 89]

let i = 0, j, temp;
function swap(a, b) {
    temp = a
    a = b
    b = temp
}

function sort(i, arrayLength, j) {
    while (i < arrayLength) {
        for(j = 0; j < arrayLength; j++) {
            if (array[j] > array[j+1]) {
                swap(array[j], array[j+1])
            }
        }
        i++
    }

    return array
}
console.log(sort(i, array.length, j))