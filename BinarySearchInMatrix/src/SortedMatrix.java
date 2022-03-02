import java.util.Arrays;

public class SortedMatrix {
    public static void main(String[] args) {
        int[][] matrix ={
                {1,2,3,4},
                {5,6,7,8},
                {9,10,11,12},
                {13,14,15,16},
        };
        System.out.println(Arrays.toString(searchInSortedMatrix(matrix,12)));
    }
    public static int[] binarySearchInAParticularRow(int[][] matrix,int row,int start,int end,int target){
        while (start<=end){
            int mid = start +(end-start)/2;
            if (matrix[row][mid]==target){
                return new int[]{row,mid};
            }
            if (matrix[row][mid]<target){
                start =mid+1;
            }
            else{
                end = mid-1;
            }
        }
        return new int[]{-1,-1};
    }
    public static int[] searchInSortedMatrix(int[][] matrix,int target){
        int rows = matrix.length;
        int cols = matrix[0].length;
        if (cols==0){
            return new int[]{-1,-1};
        }
        if (rows==1){
            return binarySearchInAParticularRow(matrix,0,0,cols-1,target);
        }
        int rowStart =0;
        int rowEnd = rows-1;
        int colMid = cols/2;
        while (rowStart<(rowEnd-1)){
            int mid = rowStart + (rowEnd-rowStart)/2;
            if (matrix[mid][colMid]==target){
                return new int[]{mid,colMid};
            }
            if (matrix[mid][colMid]<target){
                rowStart = mid;
            }
            else {
                rowEnd = mid;
            }
        }
        if (matrix[rowStart][colMid]==target){
            return new int[]{rowStart,colMid};
        }
         if (matrix[rowStart+1][colMid]==target){
            return new int[]{rowStart+1,colMid};
        }
         if (target<=matrix[rowStart][colMid-1]){
            return binarySearchInAParticularRow(matrix,rowStart,0,colMid-1,target);
        }
        if (target>=matrix[rowStart][colMid+1]&&target<=matrix[rowStart][cols-1]){
            return binarySearchInAParticularRow(matrix,rowStart,colMid+1,cols-1,target);
        }
         if (target<=matrix[rowStart+1][colMid-1]){
            return binarySearchInAParticularRow(matrix,rowStart+1,0,colMid-1,target);
        }
         else {
            return binarySearchInAParticularRow(matrix,rowStart+1,colMid+1,cols-1,target);
        }
    }

}
