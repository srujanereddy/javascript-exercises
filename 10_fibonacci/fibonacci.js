const fibonacci = function(num) {
    num= +num;
    let a=1,b=1;
    if(num<0)
        return "OOPS";
    if(num ===0)
        return 0;
    if(num==1 || num==2)
        return 1;
    num-=2;
    while(num--){
        fib=a+b;
        [a,b]=[b,fib];
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
