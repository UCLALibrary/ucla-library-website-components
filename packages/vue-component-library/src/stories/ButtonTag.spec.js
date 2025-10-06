describe("Funkhaus / ButtonTag", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=button-tag--default&args=&viewMode=story")
        cy.get(".button-tag").should("exist")
        cy.percySnapshot("Funkhaus / ButtonTag")
    })
})
