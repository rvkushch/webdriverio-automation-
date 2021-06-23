class CareersPage {
    
    get careersLinkElement() {
        return $('footer.footer div.col-6:nth-child(5) ul.list-style-none li:nth-child(3) a')
    }

    scrollToCareersLinkElement() {
        this.careersLinkElement.scrollIntoView()
    }

    clickCareersLink() {
        this.careersLinkElement.click()
    }
    
    get openPositionsLinkElement() {
        return $('div.container-lg p:nth-child(3) a:nth-child(1)')
    }

    clickOpenPositionLinkElement() {
        this.openPositionsLinkElement.click()
    }

    get openPositionsElementBlock() {
        return $('div.pb-md-6')
    }

    consoleDivAttrOfOpenPositionElementsBlock() {
        const divsBlock = this.openPositionsElementBlock
        console.log(divsBlock.$$('div')[0].$('h3').getText())
        console.log(divsBlock.$$('div')[1].$('h3').getText())
        console.log(divsBlock.$$('div')[2].$('h3').getText())
        console.log(divsBlock.$$('div')[3].$('h3').getText())
        console.log(divsBlock.$$('div')[4].$('h3').getText())
        console.log(divsBlock.$$('div')[5].$('h3').getText())
    }



   /*consoleListOfOpenPositions() {
        const childrenList = [];
        var listOfElements = this.divAttrOfOpenPositionElementsBlock();
        listOfElements.each(function(i, v){
            childrenList.push($(v).text());
            });
        console.log(childrenList);
    }
    */
}

module.exports = new CareersPage()

/*it('get content from table cell', () => {
    browser.url('http://the-internet.herokuapp.com/tables');
    const rows = $$('#table1 tr');
    const columns = rows[1].$$('td'); // get columns of 2nd row
    console.log(columns[2].getText()); // get text of 3rd column
});*/