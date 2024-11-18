class Pen{
    String color;
    String type;
    
    public void printColor(){
        System.out.print(this.color);
    }
    }
class OOPS{
    public static void main(String[]args){
        Pen pen1=new Pen();
        Pen pen2=new Pen();
        pen1.color="blue";
        pen2.color="black";
        pen1.printColor();
        pen2.printColor();
        
    }
}