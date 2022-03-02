public class OederAgnisticsBinarySearch {
    // when we don't know that array is sorted in which order
    public static void main(String[] args) {
        int[] arr = {5,4,3,2,1};
        int[] arr2 = {1,3,7,9,10,12,23,55,67,87};
        int a = orderAgnostics(arr2,0);
        System.out.println(a);
    }
    static int orderAgnostics(int arr[],int target){
        int start =0;
        int end = arr.length-1;
        boolean check = arr[start]<=arr[end];
        while (start<=end){
            int mid = start+(end-start)/2;
            if (arr[mid]==target){
                return mid;
            }
            if (check){
                if (arr[mid]<target){
                    start = mid+1;
                }
                else{
                    end = mid-1;
                }
            }
            else {
                if (arr[mid]>target){
                    start = mid+1;
                }
                else if (arr[mid]<target){
                    end = mid-1;
                }
            }
        }
        return -1;
    }
}
