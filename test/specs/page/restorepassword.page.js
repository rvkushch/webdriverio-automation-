class RestorePasswordPage {

    get loginFieldOnLoginPage() {
        return $('#login_field')
    }

    setIncorrectValueInLoginField() {
        this.loginFieldOnLoginPage.addValue('$$@@@3');
    }

    get passwordFieldOnLoginPage() {
        return $('#password')
    }

    setIncorrectValueInPasswordField() {
        this.passwordFieldOnLoginPage.addValue('...');
    }

    get signInButtonForIncorrectData(){
        return $('form div.position-relative input.btn')
    }

    clickSignInButtonWithIncorrectData() {
        this.signInButtonForIncorrectData.click()
    }

    clearLoginInputField() {
        this.loginFieldOnLoginPage.clearValue()
    }

    clearPasswordInputField() {
        this.passwordFieldOnLoginPage.clearValue()
    }

    setIncorrectValueInLoginField1() {
        this.loginFieldOnLoginPage.addValue('');
    }

    setIncorrectValueInPasswordField1() {
        this.passwordFieldOnLoginPage.addValue('');
    }

    setIncorrectValueInLoginField2() {
        this.loginFieldOnLoginPage.addValue('q/.,mznbvzvxvc1235467890---1----');
    }
    setIncorrectValueInPasswordField2() {
        this.passwordFieldOnLoginPage.addValue('111*&^()!');
    }

    get forgotPasswordButton() {
        return $('div.position-relative:nth-child(4) a')
    }

    clickForgotPasswordButton() {
        this.forgotPasswordButton.click()
    }

    get enterYourEmailAdressField() {
        return $('#email_field')
    }

    setValueInEnterYourEmailInputField() {
        this.enterYourEmailAdressField.addValue('quizzeee922211@gmail.com')
    }



    /*get sendPasswordResetEmailButton() {
        return $('')
    }
                                                        //need to verify account - to be known as a human 
    clickSendPasswordResetEmailButton() {
        this.sendPasswordResetEmailButton.click() 
    }*/

}

module.exports = new RestorePasswordPage()