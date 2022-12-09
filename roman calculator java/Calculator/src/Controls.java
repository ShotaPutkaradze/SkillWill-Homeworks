public class Controls {
    public boolean isRoman(String s)
    {
        return !s.isEmpty()
                && s.matches("M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})");
    }

    public boolean isOperator(String op){
        if (op.equals("+") || op.equals("-") || op.equals("*") || op.equals("/")) {
            return true;
        }else{
            return false;
        }
    }
}
