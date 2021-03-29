

#include <iostream>
using namespace std;

void bubbleSort(int arr[], int size) {
    bool isSorted;
    for (int i = 0; i < size; i++) {
        isSorted=true;
        for (int j = 1; j < size - i; j++) {
            if (arr[j] < arr[j - 1]) {
                swap(arr[j], arr[j - 1]);
                isSorted = false;
            }
        }
        if (isSorted)return;
    }
}