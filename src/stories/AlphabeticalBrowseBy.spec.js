describe("GENERAL / AlphabeticalBrowseBy", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=alphabetical-browse-by--default&args=&viewMode=story"
        )
        cy.get(".alphabetical-browse-by").should("exist")

        cy.percySnapshot("GENERAL / AlphabeticalBrowseBy: Default")
    })

    // it("Desktop version should show only one row", () => {
    //     cy.viewport(1920, 1080)
    //     cy.visit(
    //         "/iframe.html?id=alphabetical-browse-by--desktop&args=&viewMode=story"
    //     )
    //     cy.get(".alphabetical-browse-by").should("exist")
    // })

    // it("Tablet version should show only two rows", () => {
    //     cy.viewport(768, 1024)
    //     cy.visit(
    //         "/iframe.html?id=alphabetical-browse-by--desktop&args=&viewMode=story"
    //     )
    //     cy.get(".alphabetical-browse-by").should("exist")
    // })

    // it("Smartphone version should show only three rows", () => {
    //     cy.viewport(360, 740)
    //     cy.visit(
    //         "/iframe.html?id=alphabetical-browse-by--desktop&args=&viewMode=story"
    //     )
    //     cy.get(".alphabetical-browse-by").should("exist")
    // })
})
