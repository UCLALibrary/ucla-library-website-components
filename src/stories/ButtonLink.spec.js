describe("BUTTON / Link", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=button-link--default&args=&viewMode=story")
        cy.get(".button-link").should("exist")

        cy.percySnapshot("BUTTON / Link: Default")
    })

    it("Opens internal links in same tab", () => {
        cy.visit("/iframe.html?id=button-link--secondary-library-internal&args=&viewMode=story")
        cy.get("a.button-link").should("have.attr", "target", "")
    })

    it("Opens external links in a new tab", () => {
        cy.visit("/iframe.html?id=button-link--secondary-external&args=&viewMode=story")
        cy.get("a.button-link").should("have.attr", "target", "_blank")
    })
})
