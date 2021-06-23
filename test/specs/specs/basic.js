const registrationPage = require( "../page/registration.page");
const loginPage = require("../page/login.page")
const restorePasswordPage = require("../page/restorepassword.page")
const mouseHoverPage = require('../page/mousehover.page')
const pricingPage = require('../page/pricing.page')
const explorePage = require('../page/explore.page')
const enterprisePage = require('../page/enterprise.page')
const careersPage = require('../page/careers.page')


describe('Final homework project', () => {
    it('should fill information for REGISTRATION PAGE and check is verify account text displayed', () => {
        browser.setWindowSize(1920, 1080)
        browser.url('https://github.com/')
        browser.pause(3000) 
        
        registrationPage.setEmailAdressValue()
        browser.pause(1000)

        registrationPage.clickSignUpButton()
        browser.pause(3000)

        registrationPage.clickContinueEmailButton()
        browser.pause(3000)

        registrationPage.setPasswordValue()
        browser.pause(2000)

        registrationPage.clickContinuePasswordButton()
        browser.pause(2000)

        registrationPage.setUsernameValue()
        browser.pause(2000)

        registrationPage.clickContinueUsernameButton()
        browser.pause(2000)

        registrationPage.setYesOrNoNotificationsValue()
        browser.pause(2000)

        registrationPage.clickContinueNotificationsButton()
        browser.pause(2000)

        registrationPage.verifyDisplayedText()
        browser.pause(3000)
    });

    it('should fill LOGIN PAGE fields, check current URL and user name', () => {
        browser.url('https://github.com/login?return_to=%2Fsignup%3Fuser_email%3D2222222333%2540gmail.com%26source%3Dform-home-signup') 
        browser.setWindowSize(1920, 1080)
        browser.pause(2000)        
        loginPage.setUsernameLoginPageValue()
        browser.pause(2000)
        loginPage.setPasswordLoginPageValue()
        browser.pause(2000)
        loginPage.clickSignInButton()
        browser.pause(2000)
        loginPage.consoleCurrentUrl()
        browser.pause(2000)
        loginPage.clickDropdownMenuButton()
        browser.pause(2000)
        loginPage.consoleProfileCurrentName()
        browser.pause(2000)
        loginPage.clickLogOutFromLoginPage()
        browser.pause(2000)

    });

    it('should do actions in case when user FORGOT PASSWORD and input fields with incorrect data', () => {
        browser.url('https://github.com/login')
        browser.setWindowSize(1920, 1080)
        browser.pause(1000)

        restorePasswordPage.setIncorrectValueInLoginField()
        browser.pause(1000)

        restorePasswordPage.setIncorrectValueInPasswordField()
        browser.pause(1000)

        restorePasswordPage.clickSignInButtonWithIncorrectData()
        browser.pause(1000)

        restorePasswordPage.clearLoginInputField()
        browser.pause(1000)

        restorePasswordPage.clearPasswordInputField()
        browser.pause(1000)

        restorePasswordPage.setIncorrectValueInLoginField1()
        browser.pause(1000) 

        restorePasswordPage.setIncorrectValueInPasswordField1()
        browser.pause(1000)

        restorePasswordPage.clickSignInButtonWithIncorrectData()
        browser.pause(1000)

        restorePasswordPage.clearLoginInputField()
        browser.pause(1000)

        restorePasswordPage.clearPasswordInputField()
        browser.pause(1000)

        restorePasswordPage.setIncorrectValueInLoginField2()
        browser.pause(1000)

        restorePasswordPage.setIncorrectValueInPasswordField2()
        browser.pause(1000) 

        restorePasswordPage.clickSignInButtonWithIncorrectData()
        browser.pause(1000)

        restorePasswordPage.clearLoginInputField()
        browser.pause(1000)

        restorePasswordPage.clearPasswordInputField()
        browser.pause(1000)

        restorePasswordPage.clickForgotPasswordButton()
        restorePasswordPage.setValueInEnterYourEmailInputField()
        browser.pause(5000)
    });

    it('should check can Why Github, Explore, Pricing elements have hover state and are they displayed', () => {
        browser.url('https://github.com/')
        browser.setWindowSize(1920, 1080)
        browser.pause(2000)

        mouseHoverPage.mouseHoverOnWhyGithubElem()
        browser.pause(2000)

        mouseHoverPage.mouseHoverOnExploreElem()
        browser.pause(4000)

        mouseHoverPage.mouseHoverOnPricingElem()
        browser.pause(4000)

        mouseHoverPage.isWhyGithubElemDisplayed()
        mouseHoverPage.isExploreElemDisplayed()
        mouseHoverPage.isPricingElemDisplayed()

        });

    it('should join for free in plans of PRICING Element', () => {
        browser.url('https://github.com/')
        browser.pause(2000)
        browser.setWindowSize(1920, 1080)
        browser.pause(4000)

        pricingPage.moveToPricingElement()
        browser.pause(6000)

        pricingPage.clickPlansElement()
        browser.pause(2000)

        pricingPage.scrollToJoinForFreeButton()
        browser.pause(2000)

        pricingPage.clickJoinForFreeButton()
        browser.pause(2000)

        pricingPage.setUsernameInputPricingPageValue()
        browser.pause(2000)

        pricingPage.setEmailInputPricingPageValue()
        browser.pause(2000)

        pricingPage.setPasswordPricingPageValue()
        browser.pause(5000)
        });

    it('should click EXPLORE element, go to GITHUB TOPICS, check is Topics title displayed, enter webdriverio in search', () => {
        
        browser.url('https://github.com/')
        browser.pause(2000)
        browser.setWindowSize(1920, 1080)
        browser.pause(2000)

        explorePage.moveToExploreGithubElement()
        browser.pause(5000)

        explorePage.clickTopicsElement()
        browser.pause(2000)

        explorePage.checkTopicsTitleElementIsDisplayed()
        browser.pause(4000)

        explorePage.setSearchInputFieldOnTopicsPageValue()
        browser.pause(3000)

        explorePage.clickSearchInAllGithubButton()
        browser.pause(2000)

        explorePage.clickOnWebdRepositoryLink()
        browser.pause(2000)

        explorePage.currentUrlAfterClickWebdRepositoryLink()
        browser.pause(2000)
    });

    it('should click start free trial and check it both in ENTERPRISE CLOUD AND SERVER', () => {
        browser.url('https://github.com/')
        browser.pause(2000)
        browser.setWindowSize(1920, 1080)
        browser.pause(2000)

        enterprisePage.clickEnterpriseButton()
        browser.pause(2000)

        enterprisePage.clickStartFreeTrialButton()
        browser.pause(2000)

        enterprisePage.clickEnterpriseCloudElement()
        browser.pause(2000)

        enterprisePage.setUsernameEnterpiseCloudValue()
        browser.pause(2000)

        enterprisePage.setEmailAdressEnterpriseCloudValue() 
        browser.pause(2000)

        enterprisePage.setPasswordEnterpriseCloudValue()
        browser.pause(2000)

        enterprisePage.browserSwitchToSelectTrialPlanPage()
        browser.pause(2000)

        enterprisePage.clickEnterpriseServerElement()
        browser.pause(2000)

        enterprisePage.setNameEnterpriseServerValue()
        browser.pause(2000)

        enterprisePage.setCompanyEnterpriseServerValue()
        browser.pause(2000)

        enterprisePage.setWorkEmailEnterpriseServerValue()
        browser.pause(2000)

        enterprisePage.setPhoneEnterpriseServerValue()
        browser.pause(2000)

        enterprisePage.changeRadioButtonEnterpriseServer()
        browser.pause(2000)
    });

    it('should console enable careers positions in github', () => {
        browser.url('https://github.com/')
        browser.setWindowSize(1920, 1080)

        careersPage.scrollToCareersLinkElement()
        browser.pause(2000)

        careersPage.clickCareersLink()
        browser.pause(2000)

        careersPage.clickOpenPositionLinkElement()
        browser.pause(2000)

        careersPage.consoleDivAttrOfOpenPositionElementsBlock()
        browser.pause(2000)
    
    });

})