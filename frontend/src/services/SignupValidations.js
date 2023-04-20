import Validations from "./Validations";

export default class SignupValidations{
    constructor(email, password){
        this.email=email;
        this.password=password;
    }
    checkValidations(){
        let errors =[];
        if(!Validations.checkEmail(this.email)){
            errors['email']='Invalid Email';
        }
        if(!Validations.minLength(this.password,8)){
            errors['password']='Password should be of 8 characters';
        }
        return errors;
    }
}