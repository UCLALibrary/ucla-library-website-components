describe("NAV / Menu Item Responsive", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=nav-navmenuitemresponsive--default&args=&viewMode=story"
        )
        cy.get(".nav-menu-item").should("exist")

        cy.percySnapshot("NAV / menu-item: Default")
    })
})
