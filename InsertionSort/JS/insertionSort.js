const insertionSort = arr => {
    let n = arr.length,
            tmp;

    for (let i=1; i<n; i++){
        tmp = arr[i];
        let j=i;

        while (j>0){

            if(arr[j-1]>tmp){
                arr[j]=arr[j-1];
                j--;
            } else break;
        }
        arr[j]=tmp;
    }
    return arr;
}

