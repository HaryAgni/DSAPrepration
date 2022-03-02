package com.hary.test;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        int[] arr = {1,12,34,231,213,94,56,67,43};
        int target =231;
        int ans = searchElement(arr,target);
        System.out.println(ans);
    }
    public static int searchElement(int[] arr, int num){
        ArrayList<Integer> l = new ArrayList<>();
        for (int i = 0; i < l.size(); i++) {

        }
        if (arr.length == 0) return -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i]==num){
                return i;
            }
        }
        return -1;
    }
}
