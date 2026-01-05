import java.math.BigInteger;

class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {

        
      ArrayList<Integer> mylist = new ArrayList<>();
        String str = "";
        for(int i =0;i<num.length;i++){
            str = str + num[i];
        }
        BigInteger ans = new BigInteger(str);
        BigInteger res = ans.add(BigInteger.valueOf(k));
        String s = res+"";
        for (int i = 0; i <s.length() ; i++) {
            String st = ""+ s.charAt(i);
            int a = Integer.parseInt(st);
            mylist.add(a);
            st = "";
        }
        return mylist;
    }
}