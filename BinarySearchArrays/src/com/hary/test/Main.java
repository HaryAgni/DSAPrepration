// When we know Array is sorted

package com.hary.test;

public class Main {

    public static void main(String[] args) {
	    int[] arr = {1,3,7,9,10,12,23,55,67,87};
        int a = binarySearch(arr,87);
        System.out.println(a);
    }
    public static int binarySearch(int[] arr,int target){
        int start =0;
        int end = arr.length-1;
        while (start<=end){
            int mid = start+(end-start)/2;
            if (arr[mid]<target){
                start = mid+1;
            }
            else if (arr[mid]>target){
                end = mid-1;
                }
            else {
                return mid;
            }
        }
        return -1;
    }
}
