const palindromes = function (str) {
    const alnum = 'abcdefghijklmnopqrstuvwxyz0123456789';
    str = str
        .toLowerCase()
        .split('')
        .filter(char => alnum.includes(char))
        .join('');
    return str.split('').reverse().join('') === str;
};

// Do not edit below this line
module.exports = palindromes;
