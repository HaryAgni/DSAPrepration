import java.util.Arrays;

public class Seletion {
    public static void main(String[] args) {
        int[] arr = {5,4,3,2,1};
        int[] arr2 ={1};
        int[] arr3 ={2,4,6,2,0,-1,4,7,97,12};
        int[] arr4 ={ };
        int[] arr5 ={1,2,3,4,5};
        Arrays.sort(arr3);
        System.out.println(Arrays.toString(slSort(arr)));
        System.out.println(Arrays.toString(slSort(arr2)));
        System.out.println(Arrays.toString(slSort(arr3)));
        System.out.println(Arrays.toString(slSort(arr4)));
        System.out.println(Arrays.toString(slSort(arr5)));
    }
    public static int[] slSort(int[] arr){
        int end = arr.length-1;
        for (int i = 0; i < arr.length; i++) {
            int maxIndex = findMax(arr,end);
            swap(arr,maxIndex,end);
            end--;
        }
        return arr;
    }
    public static int findMax(int[] arr, int end){
        int max = arr[0];
        int index =0;
        for (int i = 0; i <=end; i++) {
            if (max<arr[i]){
                max = arr[i];
                index = i;
            }

        }
        return index;
    }
    public static void swap(int[] arr, int pos1,int pos2){
        int temp =arr[pos1];
        arr[pos1] =arr[pos2];
        arr[pos2] =temp;
    }
}
