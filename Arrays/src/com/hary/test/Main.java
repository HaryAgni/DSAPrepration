package com.hary.test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
//        String[] arr = new String[5];
//        for (int i = 0; i < arr.length; i++) {
//            arr[i] = scanner.nextLine();
//
//        }
//        for(String num : arr){
//            System.out.println(num+" ");
//        }
//        int[][] arr = new int[3][3];
//        for (int i = 0; i < arr.length; i++) {
//            for(int j =0; j<arr[i].length; j++){
//                arr[i][j] = scanner.nextInt();
//            }
//
//        }
//        for (int i = 0; i < arr.length; i++) {
//            System.out.println(Arrays.toString(arr[i]));
//        }
        int[] arr = {12,9,3,4,5,8};
        swap(arr);
        System.out.println(max(arr));

    }
    public static void swap(int[] arr){
        int start = 0;
        int end = arr.length -1;
        int temp = 0;
        for (int i = 0; i < arr.length; i++) {
            if (start>end){
                break;
            }
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;

        }
        System.out.println(Arrays.toString(arr));
    }
    public static int max(int[] arr){
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i]>max){
                max = arr[i];
            }
        }
        return max;
    }

}
