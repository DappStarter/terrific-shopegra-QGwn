require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind home hunt lobster flush toss'; 
let testAccounts = [
"0x3484a6f8806c8e5c7ae55810f6afe7bdee673a53c5f7ff266b9dd97afb43fdfd",
"0x9da9408b7c840a6aa6d2d184fe38e6b62a8baada00be5e00fc560700c43f37b3",
"0x0f36550e74fa393ab564ac009e1360b5021e8ea75b602b29f53d78d3a4c9b844",
"0xd3eb68a5ce531399f81e3d21522de4cc068a8da32b9b6da2e53e933d5601aa75",
"0x34f6f8a67326620ad0f5eba0250d5a1d16e2cca21d9d31884ed216d3e0ac992e",
"0x06582a56ff18ff66ca06505dd763618c7957e532b1ee1e4aaa4c97ed0eb65443",
"0xea0aed100f2569708247c1458186c2694f61c820dec236c3372999557507c486",
"0xbc826df2cc81eeeb4f6834df8c91efe8d2692b2e7ab7fc1bac1c3d0a76583d19",
"0xcb0f02cb254ba270b9200d934a1a6484a8a26623aec7113f23b72916a96dbd36",
"0x32235bea57e60904f72c3440aa5f15293066b893eaf5003df10928e3c6541197"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

