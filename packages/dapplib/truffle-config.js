require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain collect grace beauty food general'; 
let testAccounts = [
"0xa7aaebb6a119432779c8655d6c9ba1dfe54e590fa630e9c334eda501b137183e",
"0x5e452d4b4597c1090ecdf2a96e839f77102c86991610a1fae2082db2fd43994c",
"0xddd4e4f1a4a4efce3787c17a8fdcc1f640434c77daeceebca619014c9f4ab347",
"0xdb7c2349e2231967770ffcebd62a44a9fb091c52b0b5eb37e60cecd5396e8b58",
"0x4023546b9284146bde79a93d5e211af6748a56bd9c37a39c473f64d70cc3459e",
"0x479b85e22ee5044d6c1938861b571af9f0ae99cdf42caa70000583010e80e297",
"0xe14d4abb9f714e0c9b863dcdfa6a95119e80b80309e9d9c9366773a9746b5097",
"0xaf2515ec4b850b18bc943e01c0766de55b895eaa0c83407c6231248c9a156d27",
"0x6e44052b92411619d98be20810aebbd8dd039bbc8b01a6fbc55d92a1465cdf15",
"0xf1166498abef18325e0e9d24b4b11945919569f83898596ba79f3049bb0dd765"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


