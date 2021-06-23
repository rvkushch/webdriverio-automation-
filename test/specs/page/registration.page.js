class RegistrationPage {

    get emailAdressInputField() {
        return $('#user_email')
    }

    setEmailAdressValue() {
        this.emailAdressInputField.addValue('qiiss111issslllll@gmail.com')
    }

    get signUpButton() {
        return $('div.ml-md-n3 div.d-flex button')
    }

    clickSignUpButton() {
        this.signUpButton.click()
    }

    get continueEmailButton() {
        return $('#email-container button')
    }

    clickContinueEmailButton() {
        this.continueEmailButton.click()
    }

    get passwordInputField() { 
        return $('#password')
    }

    setPasswordValue(){
        this.passwordInputField.addValue('Strong123pass')
    }

    get continuePasswordButton() {
        return $('#password-container button.js-continue-button')
    }

    clickContinuePasswordButton() {
        this.continuePasswordButton.click()
    }

    get usernameInputField() { 
        return $('#login')
    }

    setUsernameValue(){
        this.usernameInputField.addValue('aplllausssseeee')
    }

    get continueUsernameButton() {
        return $('#username-container button.js-continue-button')
    }

    clickContinueUsernameButton() {
        this.continueUsernameButton.click()
    }

    get notificationsInputField() { 
        return $('#opt_in')
    }

    setYesOrNoNotificationsValue(){
        this.notificationsInputField.addValue('n')
    }

    get continueNotificationsButton() {
        return $('#opt-in-container button')
    }

    clickContinueNotificationsButton() {
        this.continueNotificationsButton.click()
    }

    get verifyYourAccountText() {
        return $('#captcha-and-submit-container span')   
    }

    verifyDisplayedText() {
        console.log('is Verify your account text displayed?:' + expect(this.verifyYourAccountText).toBeDisplayed())
    }

}

module.exports = new RegistrationPage()

