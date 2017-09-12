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
    
}