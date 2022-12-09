import java.util.HashMap;

public class RomanToInteger {
    int toInteger(String roman)
    {
        HashMap<Character, Integer> map = new HashMap<>();
        int decimal = 0;

        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);

        for (int i = 0; i < roman.length(); i ++) {
            if (i > 0 && map.get(roman.charAt(i)) > map.get(roman.charAt(i - 1))) {
                decimal += map.get(roman.charAt(i))  - 2 * map.get(roman.charAt(i - 1));
            }else {
                decimal += map.get(roman.charAt(i));
            }
        }
        return decimal;
    }
}
