describe("GLOBAL / Media", () => {
    describe("Image", () => {
        before(() => {
            cy.visit("/iframe.html?id=global-media-item--image")
        })

        it("loads", () => {
            cy.get(".media-item").should("exist")
            cy.get(".media-image").should("exist")
        })
    })

    describe("Video", () => {
        before(() => {
            cy.visit("/iframe.html?id=global-media-item--video")
        })

        it("loads", () => {
            cy.get(".media-item").should("exist")
            cy.get(".media-video").should("exist")
        })
    })

    describe("Embed", () => {
        before(() => {
            cy.visit("/iframe.html?id=global-media-item--video-embed")
        })

        it("loads", () => {
            cy.get(".media-item").should("exist")
            cy.get(".media-embed").should("exist")
        })
    })
})