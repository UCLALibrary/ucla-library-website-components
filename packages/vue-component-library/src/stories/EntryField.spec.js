describe("Funkhaus / EntryField", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=entry-field--default&args=&viewMode=story")
        cy.get(".search-input-wrapper").should("exist")
        cy.percySnapshot("Funkhaus / EntryField")
    })
})
