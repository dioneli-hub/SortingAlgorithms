const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}

const bubbleSort = arr => {
    let isSorted;
    for (let i=0; i<arr.length; i++){
        isSorted=true;
        for (let j=1; j<arr.length-i; j++){
            if (arr[j]<arr[j-1]){
                swap(arr, j, j-1);
                isSorted=false;
            }
        }
        if (isSorted) return;
    }
}

/*let arr = [1,8,9,7,3,2,1];
bubbleSort(arr);
console.log(arr);*/
