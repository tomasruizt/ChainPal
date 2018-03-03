const Gdax = require('gdax');
var apiKey = require("../api_key.json")

const apiURI = 'https://api-public.sandbox.gdax.com';
const usdBankAccountId = '6a23926d-74b6-4373-8434-9d437c2bafb2';


const client = new Gdax.AuthenticatedClient(
    apiKey.chainpal_key,
    apiKey.chainpal_secret,
    apiKey.chainpal_passphrase,
    apiURI
);

const withdrawCallback = (err, response, data) => {
    if (err) {
        console.log('withdrawCallback error');
    }
    else {
        console.log(response.statusCode);
        console.log(data)
    }
};

function withdrawToBankUsdAccount (amount) {
    const withdrawParamsUSD = {
        amount: amount.toString(),
        currency: 'USD',
        coinbase_account_id: usdBankAccountId
    };
    client.withdraw(withdrawParamsUSD, withdrawCallback);
}