public class coins {
    public int arrangeCoins(int n) {
        int start = 1;
         int end = n;
         while(start <= end){
            int mid = start +(end-start)/2;
            int sum = (mid*(mid+1))/2;
            if(sum == n){
                return mid;
            }
            else if(sum < n){
                start = mid+1;
            }
            else{
                end = mid-1;
            }
         }
         return end;
    }
     public static void main(String[] args) {
        int n = 5;
        coins solution = new coins();
        int result = solution.arrangeCoins(n);
        System.out.println(result);
     }
}
