"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
class Navigator {
    goto(url) {
        cy.visit(url);
    }
    isElementVisibleByXpath() {
        null;
    }
    isTextAvailableByXpath(xpath) {
        try {
            cy
                .xpath(xpath)
                .should('be.visible');
            assert.ok(true, "Element - " + xpath + " is available and displaying as expected.");
        }
        catch (err) {
            console.log(err);
            assert.fail();
        }
    }
}
exports.Navigator = Navigator;
