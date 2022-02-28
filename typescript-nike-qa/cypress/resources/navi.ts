export class Navigator {

    goto(url: string){
        cy.visit(url);
    }
    isElementVisibleByXpath() {
        null
    }

    isTextAvailableByXpath(xpath: string) {
        try {
            cy
                .xpath(xpath)
                .should('be.visible')
            assert.ok(true, "Element - " + xpath + " is available and displaying as expected.")
        } catch (err) {
            console.log(err)
            assert.fail()
        }
    }
}