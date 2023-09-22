describe("BUTTON / Hide", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=button-hide--default&args=&viewMode=story")
        cy.get(".button-hide").should("exist")

        cy.percySnapshot("BUTTON / Hide: Default")
    })
})
