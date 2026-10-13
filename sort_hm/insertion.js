let arr2 = [5, 3, 8, 4, 2];
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    }
    return arr;
}

console.log("Original array:", arr2);
console.log("Sorted array:", selectionSort(arr2));