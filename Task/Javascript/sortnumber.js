function bubbleSortDescending(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap the elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const inputArray = prompt("Enter an array (comma-separated values):")
    .split(',')
    .map(Number);

bubbleSortDescending(inputArray);
console.log("Sorted Array (Descending): " + inputArray);
