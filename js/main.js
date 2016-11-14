QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret);
    $(document).ready(function() {
         var params = {login: 'harold', password: 'Isa$gio$anna'};
            QB.createSession(params, function(err, result) {
                });
      
        });