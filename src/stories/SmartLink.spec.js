describe("GLOBAL / Smart Link", () => {
    // it("Default", () => {
    //     cy.visit(
    //         "/iframe.html?id=global-smart-link--default&args=&viewMode=story"
    //     )
    //     cy.get(".smart-link").should("exist")

    //     cy.percySnapshot("GLOBAL / Smart Link: Default")
    // })

    // TODO cypress is really inefficient at testing multiple examples like this. We should add a basic javascript test framework (jest???)
    const targetMappings = [
        // Parse 'target' prop
        { target_in: "0", target_out: "" },
        { target_in: "_self", target_out: "" },
        { target_in: "1", target_out: "_blank" },
        { target_in: "_blank", target_out: "_blank" },

        // if no "target" prop, base target on link local/remote
        { target_in: null, target_out: "" },
        { target_in: "", target_out: "" },
        { target_in: null, target_out: "", to: null },
        { target_in: null, target_out: "", to: "" },
        { target_in: null, target_out: "", to: "abcd" },

        // These don't work because storybook can't handle slashes in the URL, but they're pretty important and should be tested manually. Once these tests are migrated to another framework they can be tested directly
        // { target_in: null, target_out: "", to: "/local/page" },
        // { target_in: null, target_out: "", to: "http://other-local-site.library.ucla.edu/" },
        // { target_in: null, target_out: "_blank", to: "https://someones.internet/site" },
    ]
    const tabLabels = {
        "": "same tab",
        _blank: "new tab",
    }
    for (let { target_in, target_out, to = "/" } of targetMappings) {
        it(`Target ${target_in} opens ${to} in ${tabLabels[target_out]} for link to `, () => {
            cy.visit(
                `/iframe.html?id=global-smart-link--default&args=target:${encodeURI(
                    target_in
                )};to:${encodeURI(to)}&viewMode=story`
            )

            cy.get(".smart-link").should("have.attr", "target", target_out)
        })
    }
})
