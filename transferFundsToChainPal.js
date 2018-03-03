var Gdax = require('gdax');

const secrets = {
    // Fill with real data
};

const client = new Gdax.AuthenticatedClient(
    secrets["API-key"],
    secrets["API-secret"],
    secrets["Passphrase"],
    secrets["Exchange-url"]
);

const payload = {
    amount: 0.001,
    currency: 'ETH',
    crypto_address: '0x232706dd6bbf029A80F0D61db0d456946f004984' // Kajetan's real ETH address
};

/**
 * This function transfers 0.01 ETH to Kajetan's ETH address. In case you want to do anything with the response, you can
 * pass in a callback function.
 * @param callback The function to handle the response of the API call.
 */
exports.transferFundsToChainPal = function(callback) {
    client.withdrawCrypto(payload, callback);
};