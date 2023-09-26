// For Task 1 

// 1 - Inctroduce Your Self (Name , age  , faculty , ) in varriable and write it in HTML Using JS Note using temolate Literal

        //Write Code Here
        document.write("*=============First problem================*");
        document.write("<p> Welcome </p>");
        let Name="Dolagy sameh ";
        let age=19 +"\n";
        let faculty="computer science ";
        let info=` 
                   My Name is ${Name} <br><br>
                   age is ${age} and <br><br>
                  I study at ${faculty} faculty <br><br>
                `; 
        // Note : you can write in HTML using  document.write(varribale_Name) ; 
        document.write(info);
// 2 - You Have Number 
document.write("*=============second problem===============*");
let str = "20000.432423" ; 

console.log("12312312312") //convert String To Number Using to Two different Method
document.write(" <br><br> By <b>unary</b> operator Way :"+ +str );
document.write(" <br><br> By <b>ParseFlooat </b> Way :"+ parseFloat(str));
document.write("<br><br>==========================================");
let str22="hello,faculty computer science engineering";
document.write(str22.slice(str22.indexOf("faculty")));