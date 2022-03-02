package com.hary.test;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
	    int[][] matrix = {
                {5,10,15,20},
                {25,30,35,40},
                {50,60,70,80},
                {81,82,83,84}
        };
        System.out.println(Arrays.toString(binarysearch(matrix,83)));
    }
    public static int[] binarysearch(int[][] matrix,int target){
        int start = 0;
        int end = matrix.length-1;
        while (start<matrix.length&&end>=0){
            if (matrix[start][end]==target){
                return new int[]{start,end};
            }
            else if (matrix[start][end]>target){
                end--;
            }
            else {
                start++;
            }
        }
        return new int[]{-1,-1};
    }
}
