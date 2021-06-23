class MouseHoverGithubPage {
    get whyGithubElement() {
        return $('//header/div[1]/div[2]/nav[1]/ul[1]/li[1]/details[1]/summary[1]')
    }
    mouseHoverOnWhyGithubElem() {
        this.whyGithubElement.moveTo(265, 15)
    }

     get exploreElement() {
        return $('//header/div[1]/div[2]/nav[1]/ul[1]/li[4]/details[1]/summary[1]')
    }
    mouseHoverOnExploreElem() {
        this.exploreElement.moveTo(445, 15)
    }

     get pricingElement() {
        return $('//header/div[1]/div[2]/nav[1]/ul[1]/li[6]/details[1]/summary[1]')
    }
    mouseHoverOnPricingElem() {
        this.pricingElement.moveTo(745, 15)
    }

    isWhyGithubElemDisplayed() {
        console.log('Is Why Github Element displayed?' + this.whyGithubElement.isDisplayed())
    }

    isExploreElemDisplayed() {
        console.log('Is Explore Element displayed?' + this.exploreElement.isDisplayed())
    }

    isPricingElemDisplayed() {
        console.log('Is Pricing Element displayed?' + this.pricingElement.isDisplayed())
    }

}

module.exports = new MouseHoverGithubPage();