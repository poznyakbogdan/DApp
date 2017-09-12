app.controller("HomeCtrl", HomeCtrl);

function HomeCtrl($scope){
    let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    $scope.a = "Hello";
    
}