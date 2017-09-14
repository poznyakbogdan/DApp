app.controller("HomeCtrl", HomeCtrl);

function HomeCtrl($scope, BlockchainService, ApiService){
    let self = this;
    self.contract = {};

    self.isLoading = true;
    self.contract.isNoReadyToDeploy = true;
    
    self.loadData = () => {
        BlockchainService.getAccounts().then(accounts=>{
            self.accounts = accounts;
            self.isLoading = false;
        }).catch(err=>{
            console.error(err);
        })
    }
    
    self.getBalance = address => {
         self.currentAddress = address;
         BlockchainService.getBalance(address).then( balance => {
            self.currentBalance = balance;
         }).catch(err=>{
             console.error(err);
         });
    }

    self.sendTransaction = () => {
        BlockchainService.sendTransaction({
            from: self.transaction.from,
            to: self.transaction.to,
            value: self.transaction.value
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.error(err);
        })
    } 

    self.compileContract = () => {
        ApiService.compileContract(self.contract.text).then(res => {
            console.log(res)
            self.contract.abi = res.data.interface;
            self.contract.binary = res.data.bytecode;
            self.contract.isNoReadyToDeploy = false;
        }).catch(err=>{
            console.error(err);
        })
    }

    self.deployContract = () => {
        BlockchainService.deployContract(
            self.contract.binary, 
            self.contract.abi, 
            self.currentAddress
        ).then(contract => {
            console.log(contract);
        }).catch(err=>{
            console.log(err);
        })
    }

}
