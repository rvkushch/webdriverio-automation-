class LoginPage {

    get usernameInputLoginPageField() {
        return $('#login_field')
    }

    setUsernameLoginPageValue() {
        this.usernameInputLoginPageField.addValue('rv.kushch@gmail.com')
    }

    get passwordInputLoginPageField() {
        return $('#password')
    }

    setPasswordLoginPageValue() {
        this.passwordInputLoginPageField.addValue('s1mplegithub2021')
    }

    get signInbuton() {
        return $('form div.position-relative input.btn')
    }

    clickSignInButton() {
        this.signInbuton.click()
    }

    get currentLoginPageUrl() {
       const url = browser.getUrl()
       return url
    }

    consoleCurrentUrl() {
        console.log('Current url is:' + this.currentLoginPageUrl)
    }

    get profileDropdownMenuButton() {
        return $('div.Header-item.mr-0 span.dropdown-caret')
    }

    clickDropdownMenuButton() {
        this.profileDropdownMenuButton.click()
    }

    get profileCurrentNameElement() {
        return $('div.header-nav-current-user a strong')
    }

    consoleProfileCurrentName() {
    const currentUserName = this.profileCurrentNameElement.getText() 
    console.log('You are signed in as:' + currentUserName)
    }

    get logOutLoginPage() {
        return $('form.logout-form button')
    }

    clickLogOutFromLoginPage() {
        this.logOutLoginPage.click()
    }

}

module.exports = new LoginPage() 