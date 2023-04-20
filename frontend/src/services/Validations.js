export default class Validations{
    static checkEmail(email){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(validRegex)) {
            alert("Valid email address!");
            document.form1.text1.focus();
            return true;
        } else {
            alert("Invalid email address!");
            document.form1.text1.focus();
            return false;
        }
    }
    static minLength(name, minLength){
        if(name.length< minLength){
            return false;
        }
        return true;
    }
}