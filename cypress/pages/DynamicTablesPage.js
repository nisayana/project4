class DynamicTablesPage {
    getHeading() {
        return cy.get(".is-size-3")
    }

    getTableHeadings() {
        return cy.get(".DynamicTables_tableHeaders__k53h5").children()
    }

    getTableRows() {
        return cy.get("td")
    }

    getAddBtn() {
        return cy.get("#add_product_btn")
    }

    getSubmitBtn() {
        return cy.get("#submit")
    }

    getTotalAmount() {
        return cy.get("#total_amount")
    }

    getModalTitle() {
        return cy.get("#modal_title")
    }

    getCloseBtn() {
        return cy.get(".delete")
    }

    getQuantityLabel() {
        return cy.get('label[for="product_quantity"]')
    }

    // getQuantityBox() {
    //     return cy.get("#quantity")
    // }

    getProductNameLabel() {
        return cy.get('label[for="product_name"]')
    }

    getProductPriceLabel() {
        return cy.get('label[for="product_price"]')
    }

    inputboxes = {
        'Quantity': '#quantity',
        'Product': '#product',
        'Price': '#price'
    }

    getInputBoxes(input){
        return cy.get(this.inputboxes[input])
    }

    getModal() {
        return cy.get(".modal-card")
    }

    getNewRow(){
        return cy.get("#product_table > tbody > tr:last-child > td")
    }
}

export default DynamicTablesPage;