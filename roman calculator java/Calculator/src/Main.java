import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));  //object for input
        RomanToInteger romanToInteger = new RomanToInteger();               //object for convert roman number to integer
        Controls controls = new Controls();
        Arithmetic arithmetic = new Arithmetic();                           //object for arithmetic operations
        IntegerToRoman integerToRoman = new IntegerToRoman();               //object for convert integer to roman number

        System.out.println("Enter roman number: ");                         //enter roman number
        String inputNum1 = br.readLine();

        while(!controls.isRoman(inputNum1)) {                               //check if roman number is correct
            System.out.println("Enter CORRECT roman number: ");
            inputNum1 = br.readLine();
        }
        arithmetic.setNum1(romanToInteger.toInteger(inputNum1));            //set num1

        do {
            System.out.println("Enter arithmetic operator: + or - or * or / or \"exit\":  ");
            String operator = br.readLine();

            if (operator.equals("exit")) {
                System.out.println("Result: " + integerToRoman.toRoman(arithmetic.getResult()));
                break;
            }

            while(!controls.isOperator(operator)){                         // check if operator is correct
                System.out.println("Enter CORRECT arithmetic operator: + or - or * or /: ");
                operator = br.readLine();
            }

            System.out.println("Enter roman number or \"exit\": ");
            String inputNum2 = br.readLine();

            if (inputNum2.equals("exit")) {
                System.out.println("Result: " + integerToRoman.toRoman(arithmetic.getResult()));  // print result
                break;
            }

            while(!controls.isRoman(inputNum2)) {
                System.out.println("Enter correct roman number: ");
                inputNum2 = br.readLine();
            }

            arithmetic.setNum2(romanToInteger.toInteger(inputNum2));       //set num2
            arithmetic.operation(operator);                                //do arithmetic operation

          //  System.out.println("Result: " + integerToRoman.toRoman(arithmetic.getResult()));  // print resul

        } while(true);

    }
}