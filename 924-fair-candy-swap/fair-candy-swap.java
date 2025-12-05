class Solution {
    public int[] fairCandySwap(int[] arr1, int[] arr2) {
        Arrays.sort(arr2);
        int[] ans = new int[2];
        int sum1 =0;
        int sum2 =0;
        
        for(int x:arr1){
            sum1+=x;
        }
        for(int x:arr2){
            sum2+=x;
        }
        for(int i=0;i<arr1.length;i++){
            int start =0;
            int end = arr2.length-1;
            int check = arr1[i]+(sum2-sum1)/2;
            while(start<=end){
                int mid = start + (end - start)/2;
                if(arr2[mid]==check){
                    ans[1] = arr2[mid];
                    ans[0]= arr1[i];
                    return ans;
                }
                else if(arr2[mid]<check){
                    start = mid+1;
                }
                else{
                    end = mid-1;
                }
            }
        }
        return ans;
    }
}