// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var output = null;
    if (n === 0) {
        return n;
    }
    if (n < 0) {
        output = '-';
        n *= -1;
    }
    n = n.toString();
    for (let i = n.length - 1; i >= 0; i--) {
        if ((output === null || output === '-') && n[i] === "0") {
        } else if (output === null) {
            output = n[i];
        } else {
            output += n[i];
        }
    }
    return parseInt(output);
}

module.exports = reverseInt;

// function reverseInt(n) {
//     var reversed = n.toString().split('').reverse().join('');
//     return parseInt(reversed) * Math.sign(n);
// }