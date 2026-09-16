import java.util.Scanner;

public class TitleCase {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();

        String[] words = sentence.split(" ");

        for (int i = 0; i < words.length; i++) {

            if (words[i].length() > 0) {
                words[i] = words[i].substring(0, 1).toUpperCase()
                        + words[i].substring(1).toLowerCase();
            }
        }

        System.out.println("Title Case: " + String.join(" ", words));

        sc.close();
    }
}