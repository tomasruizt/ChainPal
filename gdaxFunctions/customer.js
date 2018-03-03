var Gdax = require('gdax');

/**
 * This function transfers 0.01 ETH to Kajetan's ETH address. In case you want to do anything with the response, you can
 * pass in a callback function.
 * @param callback: The function to handle the response of the API call.
 */
exports.transferFundsToChainPal = function(callback) {
    const payload = {
        amount: 0.001,
        currency: 'ETH',
        crypto_address: '0x232706dd6bbf029A80F0D61db0d456946f004984' // Kajetan's real ETH address
    };

    initClient().withdrawCrypto(payload, callback);
};

/**
 * Calls the getAccounts API. The input callback can handle the API response.
 * @param callback: The function to handle the account balance information
 */
exports.getAccountBalance = function() {
    return initClient().getAccounts()
};

/**
 * Returns a GDAX client.
 * @returns client.
 */
function initClient() {
    const keys = {
        "API-key": "01d9324893ad6f4d27f02b5b6ea97bc0",
        "API-secret": "xlpYv/eG5fBlpqjZ7RK/EiYGD4pdgI8Qhh00QqUgg0lUw5OvK7N2P6mZlaW0jPYyg7NOqaD/gyBrH4CxkLeaZw==",
        "Passphrase": "3xf2qoqpreb",
        "Exchange-url": "https://api-public.sandbox.gdax.com"
    };

    return new Gdax.AuthenticatedClient(
        keys["API-key"],
        keys["API-secret"],
        keys["Passphrase"],
        keys["Exchange-url"]
    );
}

module.exports = exports;