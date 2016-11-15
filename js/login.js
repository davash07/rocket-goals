var attempt = 3;
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "Admin" && password == "Admin"){
		alert ("Bienvenido "+ username);
        window.localStorage.setItem('', document.getElementById('username').value);
		window.location = "dashboard/dashboard.html"; //redirecting to other page
		return false;
	}
	else{
		attempt --;
		alert("Tiene  "+attempt+" Intentos Restantes...");
		

		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}