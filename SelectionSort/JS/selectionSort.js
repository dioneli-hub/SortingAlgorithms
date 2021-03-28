const selectionSort = arr => {
    let n = arr.length;

    for (let j = 0; j < n - 1; j++) {
        let smallest = j;

        for (let i = j + 1; i < n; i++) {
            if (arr[i] < arr[smallest]) {
                smallest = i;
            }
        }

        if (smallest !== j){
            let tmp = arr[j];
            arr[j]=arr[smallest];
            arr[smallest]=tmp;
        }
    }
    return arr;
}
