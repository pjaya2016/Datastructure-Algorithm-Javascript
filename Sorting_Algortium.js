/**
 * Selection Sort
 * @param {*} array 
 */
let SelectionSort = (array) => {
    this.swap = (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pointer = 0,
        lengthOfArray = array.length,
        i = 0;

    for (; i < lengthOfArray; i++) {
        pointer++;
        for (let j = 0; j < lengthOfArray; j++) {
            if (array[i] < array[j]) {
                this.swap(array, i, j);
            }
        }
    }

    return array;
}

/**
 * Bubble Sort
 * @param {*} array 
 */
let BubbleSort = (array) => {
    this.swap = (array, i, j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let hasSwaped, arrayLength = array.length, i = 0;

    for (; i < arrayLength; i++) {
        hasSwaped = false;
        for (let j = 0; j < arrayLength - i; j++) {
            if (array[j] > array[j + 1]) {
                this.swap(array, j, j + 1);
                hasSwaped = true;
            }
        }
        if (!hasSwaped) {
            break;
        }
    }
    return array;
}

/**
 * Insertion Sort
 * @param {*} array 
 */
let InsertionSort = (array) => {
    let i, key, j;
    for (i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

/**
 * Merge sort
 * @param {*} array 
 */
let Mergesort = (array) => {
    let merge = (arr, l, m, r) => {
        var i, j, k;
        var n1 = m - l + 1;
        var n2 = r - m;

        var L = [], R = [];

        for (i = 0; i < n1; i++) {
            L[i] = arr[l + i];
        }
        for (j = 0; j < n2; j++) {
            R[j] = arr[m + 1 + j];
        }

        i = 0;
        j = 0;
        k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    let mergeSort = (arr, leftSide, rightSide) => {
        if (leftSide < rightSide) {
            let middle = Math.floor(leftSide + (rightSide - leftSide) / 2);
            mergeSort(arr, leftSide, middle);
            mergeSort(arr, middle + 1, rightSide);
            merge(arr, leftSide, middle, rightSide);
        }
    }
    mergeSort(array, 0, array.length - 1);
}
