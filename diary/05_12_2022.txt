Quy trình Eventlistener
1. Deploy code ở trên remix.

2. Lên trang scan của mạng đó verify codee => ABI Contract.

3. ABI Contract bỏ vào file json => const ABI = require('./ABI_IISM.json');

4. RPC của mạng => const web3 = new Web3('wss://data-seed-prebsc-1-s1.binance.org:8545');

5. Contract => const CONTRACT_ADDRESS = '0x1a2EFF0414Af92b0C2df31a2B23959855D474597';

6. const myContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS); 

7. Dùng past event gọi

async function example1() {
    let options = {
        filter: {
            _value: ['300']    //Only get events where transfer value was 1000 or 1337
        },
        fromBlock: 19235250,                  //Number || "earliest" || "pending" || "latest"
        toBlock: 'latest'
    };

    myContract.getPastEvents('Transfer', options)
        .then(result => console.log ('result', result))
        .catch(err => console.log ('error', err.message, err.stack));
}

