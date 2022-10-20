describe("GLOBAL / Media", () => {
    describe("Image", () => {
        before(() => {
            cy.visit("/iframe.html?id=global-media-item--default")
        })

        it("uses ResponsiveImage", () => {
            cy.get(".responsive-image").should("exist")
            cy.get(".responsive-video").should("not.exist")
        })
    })

    describe("Video", () => {
        before(() => {
            cy.visit("/iframe.html?id=global-media-item--video")
        })

        it("uses ResponsiveVideo", () => {
            cy.get(".responsive-image").should("not.exist")
            cy.get(".responsive-video").should("exist")
        })
    })
})
