app.controller("HomeCtrl", HomeCtrl);

function HomeCtrl($scope, BlockchainService){
    let self = this;

    self.isLoading = true;
    
    self.loadData = () => {
        BlockchainService.getAccounts().then(accounts=>{
            self.accounts = accounts;
            self.isLoading = false;
        }).catch(err=>{
            console.error(err);
        })
    }
    
    self.getBalance = address => {
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

    }

}
