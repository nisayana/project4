const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
import DynamicTablesPage from "../../../pages/DynamicTablesPage";("../../../pages/DynamicTablesPage");
const { data } = require("cypress/types/jquery");

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
		cy.wrap(el).should("have.text", arr[idx])
    })
});


Then(/^the user should see the table with the rows below$/, (dataTable) => {
    const arr = dataTable.rawTable.flat()

    dynamicTablesPage.getTableRows().each(($el, idx) => {
        cy.wrap($el).should("have.text", arr[idx])
    })
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (text) => {
    dynamicTablesPage.getAddBtn().should("be.enabled").and("have.text", text)
});





