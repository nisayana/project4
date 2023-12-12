const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import DynamicTablesPage from "../../../pages/DynamicTablesPage";("../../../pages/DynamicTablesPage");
// const { data } = require("cypress/types/jquery");

const dynamicTablesPage = new DynamicTablesPage();

Given('the user is on {string}', (url) => {
	cy.visit(url)
});


Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	dynamicTablesPage.getHeading().should("have.text", heading)
});

Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

    dynamicTablesPage.getTableHeadings().each(($el, idx) => {
		cy.wrap($el).should("have.text", arr[idx])
    })
});


Then(/^the user should see the table with the rows below$/, (dataTable) => {
    const arr = dataTable.rawTable.flat()

    dynamicTablesPage.getTableRows().each(($el, idx) => {
        cy.wrap($el).should("have.text", arr[idx])
    })
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (text) => {
    switch (text) {
        case "ADD PRODUCT":
            dynamicTablesPage.getAddBtn().should("be.enabled").and("have.text", text)
            break
        case "X":
            dynamicTablesPage.getCloseBtn().should("be.enabled")
            break
        case "SUBMIT":
            dynamicTablesPage.getAddBtn().should("be.enabled")
            break
    }
});


Then(/^the user should see the "([^"]*)" text displayed$/, (text) => {
	dynamicTablesPage.getTotalAmount().should("have.text", text)
});


When(/^the user clicks on the "([^"]*)" button$/, (btn) => {
    switch (btn) {
        case "ADD PRODUCT":
                dynamicTablesPage.getAddBtn().click()
                break
        case "X":
            dynamicTablesPage.getCloseBtn().click()
            break
        case "SUBMIT":
            dynamicTablesPage.getSubmitBtn().click()
            break
    }
});

Then(/^the user should see the "([^"]*)" modal with its heading$/, (heading) => {
	dynamicTablesPage.getModalTitle().should("have.text", heading)
});


Then(/^the user should see the "([^"]*)" label$/, (label) => {
    switch (label) {
        case "Please select the quantity":
            dynamicTablesPage.getQuantityLabel().should("have.text", label)
            break
        case "Please enter the name of the product":
            dynamicTablesPage.getProductNameLabel().should("have.text", label)
            break
        case "Please enter the price of the product":
            dynamicTablesPage.getProductPriceLabel().should("have.text", label)
            break
    }
});


Then(/^the user should see the "([^"]*)" input box is enabled$/, (box) => {
    dynamicTablesPage.getInputBoxes(box).should("be.enabled")
});


Then(/^the user should not see the "([^"]*)" modal$/, (modal) => {
	dynamicTablesPage.getModal().should("not.exist")
});


When(/^the user enters the quantity as "([^"]*)"$/, (quantity) => {
	dynamicTablesPage.getInputBoxes("Quantity").type(quantity)
});


When(/^the user enters the product as "([^"]*)"$/, (product) => {
	dynamicTablesPage.getInputBoxes("Product").type(product)
});

When(/^the user enters the price as "([^"]*)"$/, (price) => {
	dynamicTablesPage.getInputBoxes("Price").type(price)
});


Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()
	dynamicTablesPage.getNewRow().each(($el, idx) => {
		cy.wrap($el).should('have.text', arr[idx])
	})
});



