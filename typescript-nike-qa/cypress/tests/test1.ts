/**
 * Name: Nike Menswear Homepage Functional Test #1
 * Author: Carl Jones III
 * License: Evergreen Xchange, LLC
 * Date: 2/26/22
 * Last Updated By:
 * Description: Nike e-comm testing
 * **/

import {Navigator} from "../resources/navi"

let navi = new Navigator()
describe('Menswear Home - Verification and Functional Test', function(){
    it('Navigate to - Nike Mens Homepage', function(){
        navi.goto('https://www.nike.com/men')
    })
    it('Verification - Sales Event Banner', function(){
        cy.xpath('//body/div[@id=\'ciclp-app\']/div[2]/div[1]')
            .should('have.class', 'bannerWrap')
            .should('be.visible')
    })
    it('Verification - Menswear Navigation', function(){
        cy.get(':nth-child(1) > .JSftBPEZ')
            .contains('Shoes')
            .should('be.visible')
        cy.get(':nth-child(2) > .JSftBPEZ').contains('Clothing')
        cy.get(':nth-child(3) > .JSftBPEZ').contains('Accessories')
        cy.get(':nth-child(4) > .JSftBPEZ').contains('Sale')
    })
    it('Verification - Main Image Carousel', function(){

    })
    it('Verification - Shop The Essentials', function(){

    })
})
