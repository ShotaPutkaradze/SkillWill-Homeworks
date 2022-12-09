public class Arithmetic {
    private int num1 =0, num2 =0, result = 0;
    public void setNum1(int num1) {
        this.num1 = num1;
    }
    public void setNum2(int num2) {
        this.num2 = num2;
    }
    public int getResult(){
        return this.result;
    }

    public void operation (String operator){
        switch (operator){
            case "+" -> {
                this.result = this.num1 + this.num2;
                this.num1 = this.result;
            }
            case "-" -> {
                this.result = this.num1 - this.num2;
                this.num1 = this.result;
            }
            case "*" -> {
                this.result = this.num1 * this.num2;
                this.num1 = this.result;
            }
            case "/" -> {
                this.result = this.num1 / this.num2;
                this.num1 = this.result;
            }
        }
    }
}
