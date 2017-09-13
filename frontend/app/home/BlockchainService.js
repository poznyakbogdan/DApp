app.service("BlockchainService", BlockchainService);

function BlockchainService($q){
    let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    return {
        getAccounts: () => {
            return $q((resolve, reject)=>{
                web3.eth.getAccounts((err, accounts)=>{
                    if (err){
                        reject(err);
                    }    
                    resolve(accounts);
                })
            })
        },
        getBalance: address => {
            return $q((resolve, reject) => {
                web3.eth.getBalance(address, (err, balance)=>{
                    if (err) {
                        reject(err);
                    }
                    resolve(balance);
                });
            }) 
        },
        sendTransaction: options => {
            return $q((resolve, reject) => {
                web3.eth.sendTransaction(options, (err, res)=>{
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                });
            }) 
        }
        
    }
}