var Gdax = require('gdax');

/**
 * This function transfers 0.01 ETH to Kajetan's ETH address.
 * @return The response fo the API call
 */
exports.transferFundsToChainPal = function() {
    const payload = {
        amount: 0.01,
        currency: 'ETH',
        crypto_address: '0x232706dd6bbf029A80F0D61db0d456946f004984' // Kajetan's real ETH address
    };

    var response = initClient().withdrawCrypto(payload);
    return response;
};

/**
 * Calls the getAccounts API.
 * @return The response of the API call
 */
exports.getAccountBalance = function() {
    var response = initClient().getAccounts();
    return response;
};

/**
 * Returns a GDAX client.
 * @returns client.
 */
function initClient() {
    const keys = {
        // fill this
    };

    return new Gdax.AuthenticatedClient(
        keys["API-key"],
        keys["API-secret"],
        keys["Passphrase"],
        keys["Exchange-url"]
    );
}

module.exports = exports;