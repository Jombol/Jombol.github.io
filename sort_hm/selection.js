let arr3 = [5, 3, 8, 4, 2];
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentElement;
    }
    return arr;
}

console.log("Original array:", arr3);
console.log("Sorted array:", insertionSort(arr3));
