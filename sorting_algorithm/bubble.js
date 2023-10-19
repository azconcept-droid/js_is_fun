let array = [1, 100, -5, -2, 89]

// function swap(a, b) {
//     let temp = a
//     // console.log(a, b)
//     a = b
//     b = temp
//     // console.log(a, b)
// }

function sort(array) {
    let i = 0, j;
    while (i < array.length) {
        for(j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                // swap(array[j], array[j+1])
                console.log(array)
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
        i++
    }
}
sort(array)
console.log(array)