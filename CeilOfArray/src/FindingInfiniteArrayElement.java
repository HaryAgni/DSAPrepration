public class FindingInfiniteArrayElement {
    public static void main(String[] args) {
        int[] arr ={1,23,33,34,36,38,41};
        System.out.println(range(arr,41));
    }
    public static int range(int[] arr,int target){
        int start = 0;
        int end =1;
        while (target>arr[end]){
            int newstart = end+1;
            end = end +(end-start+1)*2;
            start = newstart;
        }
        return search(arr,target,start,end);
    }
    public static int search(int[] arr,int target,int start,int end) {
        while (start <= end) {
            int mid = start + (end - start) / 2;
             if (target < arr[mid]) {
                end = mid - 1;
            }
             else  if (target > arr[mid]) {
                start = mid + 1;

            }
             else {
                return mid;
            }
        }
        return -1;
    }
    }
