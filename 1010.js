var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var peca1 = lines.shift().split(" ");
var peca2 = lines.shift().split(" ");

var codPeca1 = peca1.shift();
var numPeca1 = peca1.shift();
var valorPeca1 = peca1.shift();

var codPeca2 = peca2.shift();
var numPeca2 = peca2.shift();
var valorPeca2 = peca2.shift();

var total1 = numPeca1 * valorPeca1;
var total2 = numPeca2 * valorPeca2;
var totalFinal = total1 + total2;

console.log('VALOR A PAGAR: R$ ' + totalFinal.toFixed(2));