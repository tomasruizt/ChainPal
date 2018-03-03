const f = require('./gdaxFunctions');

function show(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

f.getAccountBalance(show);
f.transferFundsToChainPal(show);