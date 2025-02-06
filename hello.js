// In terminal: node -v
//In terminal:
// console.log("Hello from chai");
function printChai(){ //yhi ek mini-factory hai.
    console.log("Hello chai");

}

function bringBrush(itne){
    // console.log("Hanji, le aaya brush", itne);
    console.log(`Hanji, le aaya ${itne} brush`);

}// factory jo printing ka kaam kr rhi hai. But yeh directly print kr de rhi h. Manager se too pucha hei nhi.

function addTwo(ekNum, doNum){
    return ekNum + doNum;
    
}// yeh sirf 2 numbers ko add karne ki factory h. Print nhi krti yeh factory.

bringBrush(14);
printChai(); // calling mini-factory without manager(nodejs).
addTwo(1,1);//sirf return kr rha h. Not printing.
console.log(addTwo(2,2));
