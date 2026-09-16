import java.util.Scanner;
class TransposeOf2DMatrix{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter rows: ");
        int r=sc.nextInt();
        System.out.print("Enter cols: ");
        int c=sc.nextInt();
        int[][] arr=new int[r][c];
        for(int i=0;i<r;i++){
            for(int j=0;j<c;j++){
                System.out.print("arr["+i+"]["+j+"] = ");
                arr[i][j]=sc.nextInt();
            }
        }
        int[][] trans=new int[c][r];
        for(int i=0;i<r;i++){
            for(int j=0;j<c;j++){
                trans[j][i]=arr[i][j];
            }
        }
        System.out.println("Original:");
        for(int[] row:arr){
            for(int x:row) System.out.print(x+" ");
            System.out.println();
        }
        System.out.println("Transpose:");
        for(int[] row:trans){
            for(int x:row) System.out.print(x+" ");
            System.out.println();
        }
    }
}