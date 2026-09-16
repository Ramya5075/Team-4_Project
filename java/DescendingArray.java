import java.util.Scanner;
import java.util.Arrays;

public class DescendingArray {

    public static void sortDescending(int[] numbers) {

        for (int i = 0; i < numbers.length - 1; i++) {

            for (int j = 0; j < numbers.length - 1 - i; j++) {

                if (numbers[j] < numbers[j + 1]) {

                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number of elements: ");
        int n = scanner.nextInt();

        int[] numbers = new int[n];

        System.out.println("Enter " + n + " elements:");

        for (int i = 0; i < n; i++) {
            numbers[i] = scanner.nextInt();
        }

        sortDescending(numbers);

        System.out.println("Array in descending order:");
        System.out.println(Arrays.toString(numbers));

        scanner.close();
    }
}