const sumAll = function(sumStart, sumEnd) {
    let sum=0;
    if(sumStart>sumEnd) [sumStart,sumEnd] = [sumEnd,sumStart];
    if(sumStart<0 || !Number.isInteger(sumStart) || !Number.isInteger(sumEnd)) return "ERROR";
    for(let i=sumStart;i<=sumEnd;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
