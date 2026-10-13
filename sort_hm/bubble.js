let arr1 = [5, 3, 8, 4, 2];
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        let isSwapped = false;
        for (let j = 0; j < arr.length - 1; j++ ){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                isSwapped = true;}
            if (isSwapped === false){break}
        }
    }
    if (isSwapped === false) { 
            break; 
        }
    return arr;
}
 console.log("Original array:", arr1);
 console.log("Sorted array:", bubbleSort(arr1));