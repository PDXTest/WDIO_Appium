export default class loginpage {

    get loginbtn (){
        return $('~Login');    
    }

    get username (){
        return $('~input-email');    
    }

    get password (){
        return $('~input-password');    
    }

    get submitbtn (){
        return $('~button-LOGIN');    
    }

    async login(username:string, password:string){

        await this.loginbtn.click();
        await (await this.username).setValue(username);
        await this.password.setValue(password);
        setTimeout: 500000
        await this.submitbtn.click();
    }

    }