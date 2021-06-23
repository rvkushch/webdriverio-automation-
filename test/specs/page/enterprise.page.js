class EnterprisePage {
    
    get enterpriseElementButton(){
        return $('div.HeaderMenu nav.mt-0.px-3.px-lg-0.mb-5.mb-lg-0 ul.d-lg-flex.list-style-none li.border-bottom:nth-child(3)')
    }

    clickEnterpriseButton(){
        this.enterpriseElementButton.click()
    }

    get startFreeTrialButton() {
        return $('div.col-9-max a:nth-child(5)')
    }

    clickStartFreeTrialButton() {
        this.startFreeTrialButton.click()
    }

    get enterpriseCloudElement() {
        return $('div.currency-container:nth-child(1) div.width-full > div.h1')
    }

    clickEnterpriseCloudElement() {
        this.enterpriseCloudElement.click()
    }

    get usernameInputEnterpriseCloudField() {
        return $('#user_login ')
    }

    setUsernameEnterpiseCloudValue() {
        this.usernameInputEnterpriseCloudField.addValue('newsuuueeer90001')
    }

    get passwordInputEnterpriseCloudField() {
        return $('#user_password')
    }

    setPasswordEnterpriseCloudValue() {
        this.passwordInputEnterpriseCloudField.addValue('Newsuuueeer901')
    }

    get emailAdressInputEnterpiseCloudField() {
        return $('#user_email')
    }

    setEmailAdressEnterpriseCloudValue() {
        this.emailAdressInputEnterpiseCloudField.addValue('new12sppppqaa@gmail.com')
    }


    browserSwitchToSelectTrialPlanPage() {
        browser.newWindow('https://github.com/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise')
    }                     

    get enterpriseServerElement() {
        return $('div.currency-container:nth-child(3) div.width-full > div.h1')
    }

    clickEnterpriseServerElement() {
        this.enterpriseServerElement.click()
    }

    get nameInputEnterpriseServerField() {
        return $('#contact_request_name')
    }

    setNameEnterpriseServerValue() {
        this.nameInputEnterpriseServerField.addValue('firstnameHolsaksks')
    }

    get companyInputEnterpriseServerField() {
        return $('#contact_request_organization_name')
    }

    setCompanyEnterpriseServerValue() {
        this.companyInputEnterpriseServerField.addValue('firstcompanyllsllls')
    }

    get workEmailInputEnterpriseServerField() {
        return $('#contact_request_email')
    }

    setWorkEmailEnterpriseServerValue() {
        this.workEmailInputEnterpriseServerField.addValue('new12sppppqaa@gmail.com')
    }

    get phoneInputEnterpriseServerField() {
        return $('#contact_request_phone')
    }

    setPhoneEnterpriseServerValue() {
        this.phoneInputEnterpriseServerField.addValue('+380978811234')
    }

    get radioButtonAnyQuestionOnEnterpriseServer() {
        return $('#questions_yes')
    }

    changeRadioButtonEnterpriseServer() {
        this.radioButtonAnyQuestionOnEnterpriseServer.click()
    }

}

module.exports = new EnterprisePage()



