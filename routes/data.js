var accounts = [{
    id: '4ec387d6-f2c1-4843-b5a4-c99e88fc300e',
    currency: 'BTC',
    balance: '0.0224439300000000',
    available: '0.02244393',
    hold: '0.0000000000000000',
    profile_id: '0e8e7193-51fc-4a37-92a8-c1c792b82c12'
},
{
    id: '3f0d29b7-68ac-4373-a4a9-3da50a90ea11',
    currency: 'USD',
    balance: '80000.0073250756232500',
    available: '80000.00732507562325',
    hold: '0.0000000000000000',
    profile_id: '0e8e7193-51fc-4a37-92a8-c1c792b82c12'
},
{
    id: '2df4596a-dcc2-41aa-babc-269bbb7d6d48',
    currency: 'LTC',
    balance: '0.0000000000000000',
    available: '0',
    hold: '0.0000000000000000',
    profile_id: '0e8e7193-51fc-4a37-92a8-c1c792b82c12'
},
{
    id: '7e80303b-9cab-4aa0-b317-f31c02c93b3d',
    currency: 'GBP',
    balance: '0.0000000000000000',
    available: '0',
    hold: '0.0000000000000000',
    profile_id: '0e8e7193-51fc-4a37-92a8-c1c792b82c12'
},
{
    id: 'aaa7013b-1c70-42f0-93fb-9a1bf6777fe4',
    currency: 'EUR',
    balance: '0.0000000000000000',
    available: '0',
    hold: '0.0000000000000000',
    profile_id: '0e8e7193-51fc-4a37-92a8-c1c792b82c12'
},
{
    id: '47856532-d5b9-49e0-840f-f0bb0ebd4772',
    currency: 'ETH',
    balance: '500.0000000000000000',
    available: '500',
    hold: '0.0000000000000000',
    profile_id: '0e8e7193-51fc-4a37-92a8-c1c792b82c12'
},
{
    id: 'b93fefc1-d1a9-4a16-be11-539fca22353d',
    currency: 'BCH',
    balance: '0.0000000000000000',
    available: '0',
    hold: '0.0000000000000000',
    profile_id: '0e8e7193-51fc-4a37-92a8-c1c792b82c12'
}
];

exports.list = function (req, res) {
    //res.show('accounts', { title: 'Accounts', accounts: accounts });
    res.json(200, accounts);
};
