const Gdax = require('gdax');

var apiKey = {
    // Fill this
};

const client = new Gdax.AuthenticatedClient(
    apiKey.chainpal_key,
    apiKey.chainpal_secret,
    apiKey.chainpal_passphrase,
    apiKey.apiURI
);

function sellForFiat(amount, currency, price, callback) {
    var transaction = currency.concat('-EUR');
    console.log('Selling ' + amount.toString() + ' ' + currency.toString() + ', price: $' + price);

    const sellParams = {
        price: price.toString(),
        size: amount.toString(),
        product_id: transaction
    };

    client.sell(sellParams, callback);
}

/**
 * Sells 0.01 ETH for EUR.
 * @param callback: Function to handle the reponse from the API call.
 */
exports.sellETHForEUR = function (callback) {
    const amount = 0.01;
    const currency = 'ETH';
    const price = 800;
    sellForFiat(amount, currency, price, callback);
};

/**
 * Withdraws 1$ from the GDAX wallet to the bank the account.
 * @param callback: The function to handle the API response.
 */
const withdrawToBankUsdAccount = function(callback) {
    const withdrawParams = {
        amount: "1",
        currency: 'EUR',
        coinbase_account_id: eurBankAccountId
    };
    client.withdraw(withdrawParams, callback);
};

module.exports = exports;