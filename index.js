'use strict';

// A dict that maps the Roman numeral chars to their corresponding decimal value
const romanNumeralMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

/**
 * This function converts a string representation of a Roman numeral into its 
 * decimal equivalent
 * @param {String} romanNums - A string representation of a Roman numeral
 * @returns {Number} - The decimal representation of the passed in Roman numeral
 *  will return -1 if the input is somehow invalid
 */
const romanNumeralToDecimal = (romanNums) => {
    
    let total = 0;

    if (typeof romanNums !== 'string' || romanNums.length === 0) {
        return -1;
    }

    for (let i = 0; i < romanNums.length; i++) {

        if (romanNums[i + 1] && (romanNumeralMap[romanNums[i + 1]] > romanNumeralMap[romanNums[i]])) {
            total += romanNumeralMap[romanNums[i + 1]] - romanNumeralMap[romanNums[i]];
            i++;
        } else if (romanNumeralMap[romanNums[i]]) {
            total += romanNumeralMap[romanNums[i]];
        } else {
            return -1;
        }
    }

    return total;
}

module.exports = romanNumeralToDecimal;

console.log(romanNumeralToDecimal('XLVI'));
console.log(romanNumeralToDecimal('aX'));
console.log(romanNumeralToDecimal('XII'));