app.service("ApiService", ApiService);

function ApiService($http){
    const api = app.apiUrl;
    return {
        compileContract: text => {
            return $http.post(api + "/compile", {text: text});
        }
    }
}