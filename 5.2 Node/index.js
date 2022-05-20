const args = process.argv;
const argList = args.slice(2,args.length);

if(argList[0]==="addition"){
    let sum = 0;
    for(var i=1;i<argList.length;i++) {
        sum += Number(argList[i]);
    }
    console.log(sum);
}else if(argList[0]==="multiplication"){
    let mult = 1;
    for(var i=1;i<argList.length;i++) {
        mult *= Number(argList[i]);
    }
    console.log(mult);
}else if(argList[0]==="subtraction"){
    if(argList.length!=3){
        console.log("Invalid case!");
    }else{
        console.log(argList[1]-argList[2]);
    }
}else if(argList[0]==="division"){
    if(argList.length!=3){
        console.log("Invalid case!");
    }else{
        console.log(argList[1]/argList[2]);
    }
}else{
    console.log("Invalid case!");
}
