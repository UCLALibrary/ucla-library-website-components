describe("BLOCK/ Generic List", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=block-generic-list--default&args=&viewMode=story"
        )
        cy.get(".generic-list").should("exist")

        cy.percySnapshot("BLOCK / Generic List: Default")
    })
})
