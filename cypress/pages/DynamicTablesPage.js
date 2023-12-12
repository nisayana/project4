class DynamicTablesPage {
    getHeading() {
        return cy.get(".is-size-3")
    }

    getTableHeadings() {
        return cy.get(".DynamicTables_tableHeaders__k53h5").children()
    }

    getTableRows() {
        // return cy.get(".table").find("tbody").children()
        return cy.get("td")
    }

    getAddBtn() {
        return cy.get("#add_product_btn")
    }
}

export default DynamicTablesPage;