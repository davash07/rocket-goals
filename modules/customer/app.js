(function () {
    'use strict'

    angular
        .module('app',[])
        .controller('addData',addData);

    function addData() {
        var add = this;

        add.info = addInfo;

        // Hacemos referecia al storage y la base de datos
        var database = firebase.database().ref('/customer');
        var storage = firebase.storage().ref('img')

        function addInfo(data) {
            var file = $('#file').get(0).files[0];
            //agregamos la imagen al storage
            storage.child(file.name).put(file).then(function() {
                //obtenemos la url de descarga de la imagen
                storage.child(file.name).getDownloadURL().then(function (url) {
                    //agregamos la url a nuestra objeto y lo agregamos a firebase
                    database.push({
                        name : data.name,
                        picture: url
                    })
                })
            })

        }
    }

})();