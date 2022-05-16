const Web3 = require('web3');
const ABI = require('./ABI_IISM.json');

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const CONTRACT_ADDRESS = '0x1a2EFF0414Af92b0C2df31a2B23959855D474597';
const myContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS); 
// console.log(myContract)


async function example1() {
    let options = {
        filter: {
            _value: ['300']    //Only get events where transfer value was 1000 or 1337
        },
        fromBlock: 19260321,                  //Number || "earliest" || "pending" || "latest"
        toBlock: 'latest'
    };

    myContract.getPastEvents('Transfer', options)
        .then(result => console.log ('result', result))
        .catch(err => console.log ('error', err.message, err.stack));
}


function example2() {
    let options = {
        filter: {
            value: [],
        },
        fromBlock: 19235250
    };

    myContract.events.Transfer(options)
        .on('data', event => console.log(event))
        .on('changed', changed => console.log(changed))
        .on('error', err => console.log ('error', err.message, err.stack))
        .on('connected', str => console.log(str))
}


function example3() {
    let options = {
        fromBlock: 19235250,
        // address: ['address-1', 'address-2'],    //Only get events from specific addresses
        topics: ['Transfer']                              //What topics to subscribe to
    };

    let subscription = web3.eth.subscribe('logs', options,(err,event) => {
        if (!err)
        console.log(event)
    });

    subscription.on('data', event => console.log(event))
    subscription.on('changed', changed => console.log(changed))
    subscription.on('error', err => console.log ('error', err.message, err.stack))
    subscription.on('connected', nr => console.log(nr))
}



example1()
