import java.util.Scanner;

public class PangramChecker {
    public static boolean isPangram(String input) {
        input = input.toLowerCase();
        for (char ch = 'a'; ch <= 'z'; ch++) {
            if (input.indexOf(ch) == -1) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence or text: ");
        String inputText = scanner.nextLine();

        boolean isPangram = isPangram(inputText);
        System.out.println("Is it a pangram? " + isPangram);

        scanner.close();
    }
}
