class ExplorePage {

    get exploreGithubElement() {
        return $('//header/div[1]/div[2]/nav[1]/ul[1]/li[4]/details[1]/summary[1]')
    }

    moveToExploreGithubElement() {
        this.exploreGithubElement.moveTo(531, 20)
    }

    get topicsElement() {
        return $('div.dropdown-menu ul.list-style-none.mb-3:nth-child(3) li:nth-child(1) a')
    }

    clickTopicsElement() {
        this.topicsElement.click()
    }

    get topicsTitleElement() {
        return $('div.container-lg.text-center h1')
    }

    checkTopicsTitleElementIsDisplayed() {
        console.log('Is topics text displayed?:' + this.topicsTitleElement.isDisplayed())
    }

    get searchInputFieldOnTopicsPage() {
        return $('label.form-control input.header-search-input ')
    }

    setSearchInputFieldOnTopicsPageValue() {
        this.searchInputFieldOnTopicsPage.addValue('webdriverio')    
    }

    //clickEnterToStartSearch() {browser.keys("\uE007")}

    get searchInAllGithubButton() {
        return $('//form[1]/label[1]/div[1]/ul[3]/li[3]/a[1]/div[3]/span[2]')
    }

    clickSearchInAllGithubButton() {
        this.searchInAllGithubButton.click()
    }

    get webdriverioRepositoryLink() {
        return $('ul.repo-list li.repo-list-item:nth-child(1) div.mt-n1 div.f4 a')
    }

    clickOnWebdRepositoryLink(){
        this.webdriverioRepositoryLink.click()
    }

    get CurrentUrlAfterClickWdReposLink() {
        var url = browser.getUrl()
        return url
    }

    currentUrlAfterClickWebdRepositoryLink() {
        console.log('Current url is:' + this.CurrentUrlAfterClickWdReposLink)
    }

}

module.exports = new ExplorePage()