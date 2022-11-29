describe("BLOCK / BlockDropdownCheckbox", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=block-dropdown-checkbox--default&args=&viewMode=story"
        )
        cy.get(".block-dropdown-checkbox").should("exist")

        cy.percySnapshot("BLOCK / DropdownCheckbox: Default")
    })
})
