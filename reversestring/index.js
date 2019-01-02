// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let output = '';
    for (let i = str.length-1; i >= 0; i--){
        output += str[i];
    }
    return output;
}

module.exports = reverse;

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}