describe("GLOBAL / Header Smart", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=global-header-smart--default--default&args=&viewMode=story"
        )
        cy.get(".header-smart").should("exist")

        cy.percySnapshot("NAV / Header Smart: Default")
    })
})
