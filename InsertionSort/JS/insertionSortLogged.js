const l = (x) =>{
    console.log(x);
}

const insertionSort = arr => {
    let n = arr.length,
        tmp;

    for (let i=1; i<n; i++){
        l("i: "+ i)
        tmp = arr[i];
        l("tmp: "+ tmp)
        let j=i;
        l("j: "+ j)
        while (j>0){
            l("j: "+ j)
            l("arr[j-1]: "+ arr[j-1])
            l("tmp: "+ tmp)
            l( arr[j-1]>tmp)
            if(arr[j-1]>tmp){
                arr[j]=arr[j-1];
                l(" arr[j]: "+  arr[j])
                l(arr)
                j--;
            } else break;
        }
        arr[j]=tmp;
        l(" now arr[j]: "+ arr[j])
        l(" now arr: "+ arr)
    }
    return arr;
}

