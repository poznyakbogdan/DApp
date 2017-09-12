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
        }
        
    }
}