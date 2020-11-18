// Switch variable a and b values a = 3 b = 8 After switch: a = 8 b = 3
function main() {
    let a = "3";
    let b = "8";

    temp = a;
    a = b;
    b = temp;

    temp = undefined;
    delete(temp);

    console.log("a is " + a);
    console.log("b is " + b);
}

main()
