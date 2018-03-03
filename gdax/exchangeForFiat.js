const Gdax = require('gdax');
var apiKey = require("../api_key.json")

const apiURI = 'https://api-public.sandbox.gdax.com';


const client = new Gdax.AuthenticatedClient(
    apiKey.chainpal_key,
    apiKey.chainpal_secret,
    apiKey.chainpal_passphrase,
    apiURI
);

const sellCryptoForFiatCallback = (err, response, data) => {
    if (err) {
        console.log('Error: ' + response.toString() + data.toString());
    }
    else {
        console.log(response.statusCode);
        console.log(data)
    }
};

function sellCryptoForFiat (amount, currency, price) {
    var transaction = currency.concat('-USD');
    console.log('Selling crypto for fiat: ' + transaction);

    const sellParams = {
        price: price.toString(),
        size: amount.toString(),
        product_id: transaction
    }
    client.sell(sellParams, sellCryptoForFiatCallback);
}