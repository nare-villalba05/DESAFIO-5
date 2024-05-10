// let contador= 1

// do { 
    // console.log("Hola")
        // contador++
// } while (contador <=5)


let intentos = 3 
let username= "nare"
let password= "123"


function Login() {
    while(intentos > 0) {
        let inputUserName = prompt ("Ingrese su nombre de usuario");
        let inputPassword = prompt ("Ingrese su contraseña:   ");

        
        if (inputUserName == username && inputPassword == password) {
            alert ("Inicio de sesion exitosa.")
            break;
            
        }   else{
            intentos--
            alert("Usuario o contraseña incorrectos. Intentos restantes:" + intentos)
        }




    }
    
    if (intentos == 0){
        alert("Has agotado tus intentos. volve mas tarde");
    }

}
Login()






