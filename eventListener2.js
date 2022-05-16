const Web3 = require('web3');
var abi = require('./ABI_IISM.json');

var web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
var CONTRACT_ADDRESS = '0x1a2EFF0414Af92b0C2df31a2B23959855D474597';
var iismContract = new web3.eth.Contract(abi, CONTRACT_ADDRESS); 

// iismContract.once('Transfer',{
//     filter:{}
// }, function(error,event){console.log(event);})

// console.log(iismContract.events.Transfer());
// transferEvent.watch(function(error, result){
//     // result contains non-indexed arguments and topics
//     // given to the `Deposit` call.
//     if (!error)
//         console.log(result);
// });

function example3() {
    var options = {
        fromBlock: 19235250,
        // address: ['address-1', 'address-2'],    //Only get events from specific addresses
        topics: ['Transfer']                              //What topics to subscribe to
    };

    var subscription = web3.eth.subscribe('logs', options,(err,event) => {
        if (!err)
        console.log(event)
    });

    subscription.on('error', err => console.log ('error', err.message, err.stack));
    // subscription.on('data', event => console.log(event));
    // subscription.on('changed', changed => console.log(changed));
    // subscription.on('connected', nr => console.log(nr))
}

example3()
// console.log(allEvents);