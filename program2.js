/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanToValue[s[i]];
        const next = romanToValue[s[i + 1]];

        // If the current value is less than the next, subtract it
        if (next && current < next) {
            total -= current;
        } else {
            // Otherwise, add it
            total += current;
        }
    }

    return total;
};



module.exports={romanToInt}