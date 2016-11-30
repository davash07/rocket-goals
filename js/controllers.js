app.controller("appController", function appController($scope, $http){
	//añadimos usuarios por defecto
	/*$scope.usuarios = [
        {
            nombre : "Israel Parra",
            web : "http://uno-de-piera.com",
            edad : "32 años",
            profesion : "programador web"
        },
        {
            nombre : "Pepito",
            web : "http://pepito.com",
            edad : "? años",
            profesion : "vender palotes!"
        }
    ]*/
    /*apizoho.json*/
    $scope.token= "&authtoken=6a701202eb76ebf85132b6ba39f6831d";
    $http.get('js/tsconfig.json').success(function(data) {
        $scope.information = data;
    });
    $http.get('https://trello.com/b/zppmyp13/encanto-app.json').success(function(data) {
        $scope.trell = data;
    });

})

//route params es para identificar los segmentos de la url, en este caso, para reconocer usuarios
app.controller("infoController", function infoController($scope,$routeParams){
	$scope.information = $scope.information[$routeParams.id];
	$scope.trell = $scope.trell[$routeParams.id];
});

//creamos el controlador addController para guardar usuarios nuevos con push
app.controller("addController", function addController($scope,$location){
	$scope.textButton = "Añadir un nuevo";
	$scope.information = {};
	$scope.newUser = function(){
		$scope.information.push($scope.information);
		$location.url("/");
	}
})

app.controller("editController", function editController($scope,$routeParams,$location){
	//obtenemos el usuario a editar con routeParams
	$scope.textButton = "Editar";
	$scope.information = $scope.information[$routeParams.id];
	$scope.editUser = function(){
		//actualizamos la información del usuario con la id que lleva $routeParams
		$scope.information[$routeParams.id] = $scope.information;
		$location.url("/");
	}
})

//eliminamos el usuario dependiendo de su id
app.controller("removeController", function removeController($scope,$routeParams,$location){
	$scope.information = $scope.information[$routeParams.id];
	$scope.removeUser = function(){
		//con splice  eliminamos un usuario del array usuarios, en este caso le decimos que debe eliminar 
		//el que tenga el id que le pasamos con $routeParams, y con el 1, le decimos que sólo 
		//debe eliminar 1, la función splice, como primer parámetro necesita la posición, que en este caso
		//es la id, y el segundo debe ser el número de elementos a eliminar, cabe decir que splice tiene
		//más variantes, y que sirve para añadir y eliminar elementos en un array, pero eso para otro momento
		$scope.information.splice($routeParams.id, 1);
		$location.url("/");
	}
})
app.controller('demoCtrl', function($scope, TrelloClient){

        $scope.authenticate = TrelloClient.authenticate

        $scope.getMyBoards = function(){
            TrelloClient.get('/members/me/boards').then(function(response){
                console.log(response);
            });
        };
    });
