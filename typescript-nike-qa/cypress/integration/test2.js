"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Name: Nike Menswear Homepage Functional Test #2
 * Author: Carl Jones III
 * License: Evergreen Xchange, LLC
 * Date: 2/26/22
 * Last Updated By:
 * Description: Nike e-comm testing
 * **/
const navi_1 = require("../resources/navi");
let navi = new navi_1.Navigator();
const username = 'evergreenxchange@gmail.com';
const password = 'NKE@0411ex1';
describe('Login Requests', function () {
    it("Login authorization", function () {
        cy.request({
            url: 'https://www.nike.com/login',
            auth: {
                username, password,
            },
        }).its('status').should('equal', 200);
    });
    it("Login POST", function () {
        cy.request({
            url: 'https://www.nike.com/login',
            method: 'POST',
            auth: {
                username, password
            },
            body: {}
        });
    });
});
