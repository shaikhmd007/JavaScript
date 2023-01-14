
// console.log("Closures In Js!");
const f1=()=>{
    let Check=0;
    return function (){
        if (Check<1){
        console.log("Function Called!")
        Check++
        }else{
        console.log("Function Is Already Called!!")
        }
    }
}
const callFunc= f1()
callFunc()
callFunc()
