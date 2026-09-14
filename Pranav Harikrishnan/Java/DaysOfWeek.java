import java.util.Scanner;
class DaysOfWeek{
    enum Day {MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY,SUNDAY;
        boolean isWeekend(){
            return this==SATURDAY||this==SUNDAY;
        }
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter day name: ");
        String d=sc.next().toUpperCase();
        Day day=Day.valueOf(d);
        if(day.isWeekend()) System.out.println(day+" is a weekend");
        else System.out.println(day+" is a weekday");
    }
}