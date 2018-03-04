const Gdax = require('gdax');

var apiKey = {
    // fill this
};

const coinBaseAccountId = '';

const client = new Gdax.AuthenticatedClient(
    apiKey.key,
    apiKey.secret,
    apiKey.passphrase,
    apiKey["Exchange-url"]
);

function sellForFiat(amount, currency, price) {
    var transaction = currency.concat('-EUR');

    const sellParams = {
        price: price,
        size: amount,
        product_id: transaction
    };

    const response = client.sell(sellParams);
    return response;
}

/**
 * Sells 0.01 ETH for EUR.
 * @return The response of the API call
 */
exports.sellETHForEUR = function () {
    const amount = '0.01';
    const currency = 'ETH';
    const price = '800';
    const response = sellForFiat(amount, currency, price);
    return response;
};

/**
 * Withdraws 1eur from the GDAX wallet to the Coinbase account.
 * @return The reponse of the API call
 */
exports.withdrawEURToCoinbase = function() {
    const withdrawParams = {
        amount: "1",
        currency: 'EUR',
        coinbase_account_id: coinBaseAccountId
    };
    const response = client.withdraw(withdrawParams);
    return response;
};

module.exports = exports;