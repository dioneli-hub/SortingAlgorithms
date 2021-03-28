
#include <iostream>
using namespace std;

void selectionSort(int arr[], int size) {

    int n = size;

    for (int j = 0; j < n - 1; j++) {

        int smallest = j;

        for (int i = j + 1; i < n; i++) {

            if (arr[i] < arr[smallest]) {
                smallest = i;
            }
        }
        swap(arr[j], arr[smallest]);
    }

}

