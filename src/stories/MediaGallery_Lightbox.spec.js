describe("MEDIA GALLERY / New Lightbox", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=media-gallery-new-lightbox--default&args=&viewMode=story"
        )
        cy.get(".lightbox").should("exist")

        cy.percySnapshot()
    })

    context("When there is only one item", () => {
        it("hides the controls", () => {
            cy.visit(
                "/iframe.html?id=media-gallery-new-lightbox--single-item&args=&viewMode=story"
            )
            cy.get(".button-prev").should("not.exist")
            cy.get(".button-next").should("not.exist")
            cy.get(".media-counter").should("not.exist")

            cy.percySnapshot()
        })
    })
})
