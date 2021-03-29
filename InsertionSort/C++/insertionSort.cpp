void insertionSort(int arr[], int size) {
    int tmp, j;
    for (int i = 1; i < size; i++) {
        tmp = arr[i];
        j = i;
        while (j > 0) {
            if (arr[j - 1] > tmp) {
                arr[j] = arr[j - 1];
                j--;
            }
            else break;
        }
        arr[j] = tmp;
    }
}