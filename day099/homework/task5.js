/*Create a User class where a private method validatePassword() checks the strength
 of the password. The method should only be used internally when setting a password.*/

 class User{
    static #validatePassword(password){
        if(password.length > 8){
            console.log("Password created succesfully")
            console.log(password)
        }else{
            console.log("The password must be a minimum 8 symbols length")
        }
    }
    static set pass(value){
        User.#validatePassword(value)

    }
    static get pass(){
        return User.#validatePassword
    }
 }



User.pass("adsfgygyfggo8")