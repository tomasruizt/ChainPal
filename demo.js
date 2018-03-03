const customer = require('./gdaxFunctions/customer');
var chainPal = require('./gdaxFunctions/chainPal');

function show(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

customer.getAccountBalance(show);
customer.transferFundsToChainPal(show);
chainPal.sellETHForEUR(show);