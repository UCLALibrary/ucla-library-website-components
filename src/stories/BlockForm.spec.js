describe("BLOCK / Form", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=block-form--default&args=&viewMode=story")
        cy.get(".block-form").should("exist")

        cy.percySnapshot("BLOCK / Form: Default")
    })
})
