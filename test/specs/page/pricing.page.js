class PricingPage {
    get pricingElement() {
        return $('//header/div[1]/div[2]/nav[1]/ul[1]/li[6]/details[1]/summary[1]')
    }

    moveToPricingElement() {
        this.pricingElement.moveTo(735, 15)
    }

    get plansElement() {
        return $('//header/div[1]/div[2]/nav[1]/ul[1]/li[6]/details[1]/div[1]/a[1]')
    }

    clickPlansElement() {
        this.plansElement.click()
    }

    get joinForFreeButton() {
        return $('div.d-lg-flex div.col-lg-4:nth-child(1) div.px-3.pt-4.pb-3 a')
    }

    scrollToJoinForFreeButton() {
        this.joinForFreeButton.scrollIntoView()
    }

    clickJoinForFreeButton() {
        this.joinForFreeButton.click()
    }

    get usernameInputPricingPageField() {
        return $('#user_login')
    }

    setUsernameInputPricingPageValue() {
        this.usernameInputPricingPageField.addValue('newssuuuuaaaazzzxxx1')
    }

    get emailInputPricingPageField() {
        return $('#user_email')
    }

    setEmailInputPricingPageValue() {
        this.emailInputPricingPageField.addValue('setemail1929298888@gmail.com')
    }

    get passwordInputPricingPageField() {
        return $('#user_password ')
    }

    setPasswordPricingPageValue() {
        this.passwordInputPricingPageField.addValue('Newpass1owdr')
    }

}

module.exports = new PricingPage();