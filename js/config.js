app.config(function(TrelloClientProvider){
    TrelloClientProvider.init({
        key: '768c94be30cd20d02288299c3dc87de6',
        appName: 'David Vasquez',
        tokenExpiration: 'never',
        scope: ['read', 'write', 'account'],
    });
})