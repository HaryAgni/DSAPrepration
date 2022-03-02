package com.hary.test;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        int[] arr = {5,4,3,2,1};
        int[] arr2 ={1,2,3,4,5};
        int[] arr3 = {3,1,5,7,2,7,6,9,0};
        System.out.println(Arrays.toString(bubbleSort(arr)));
        System.out.println(Arrays.toString(bubbleSort(arr2)));
        System.out.println(Arrays.toString(bubbleSort(arr3)));
    }
    public static int[] bubbleSort(int[] arr){
        int end = arr.length;
        for (int i = 0; i < end; i++) {
            boolean swapped =false;
            for (int j = 1; j <end-i ; j++) {
                if (arr[j]<arr[j-1]){
                    int temp = arr[j];
                    arr[j]=arr[j-1];
                    arr[j-1]=temp;
                    swapped = true;
                }

            }
            if (!swapped){
                break;
            }
        }
        return arr;


    }

}
