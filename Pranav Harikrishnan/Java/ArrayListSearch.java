import java.util.ArrayList;
import java.util.Scanner;
class ArrayListSearch{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        ArrayList<String> list=new ArrayList<>();
        System.out.print("Number of Elements:");
        int n=sc.nextInt();
        sc.nextLine();
        for(int i=0;i<n;i++){
            System.out.print("Element "+(i+1)+": ");
            list.add(sc.nextLine());
        }
        System.out.println("List: "+list);
        System.out.print("Search: ");
        String s=sc.nextLine();
        System.out.println(list.contains(s)?s+" found at index "+list.indexOf(s):s+" not found");
        System.out.print("Remove: ");
        String rem=sc.nextLine();
        list.remove(rem);
        System.out.println("List: "+list);
    }
}