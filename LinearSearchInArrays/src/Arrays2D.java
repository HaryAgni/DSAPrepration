public class Arrays2D {
    public static void main(String[] args) {

    }
    public static int[] search(int[][] arr, int target){
        if (arr.length == 0) return new int[]{-1,-1};
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                if (target == arr[i][j]){
                    return new int[]{i,j};

                }

            }

        }
        return new int[]{-1,-1};
    }
}
