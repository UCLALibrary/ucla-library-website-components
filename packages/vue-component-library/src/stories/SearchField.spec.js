describe("Funkhaus / SearchField", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=search-field--default&args=&viewMode=story")
        cy.get(".search-field").should("exist")
        cy.percySnapshot("Funkhaus / SearchField")
    })
})
