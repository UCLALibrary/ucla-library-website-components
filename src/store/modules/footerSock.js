const mock = {
    nodes: [
        {
            id: "1628",
            name: "EEEmergency",
            to: "https://test-craft.library.ucla.edu/emergency",
            classes: null,
            target: "",
        },
        {
            id: "1627",
            name: "AAAccessibility",
            to: "https://test-craft.library.ucla.edu/accessibility",
            classes: null,
            target: "",
        },
        {
            id: "1629",
            name: "PPPrivacy & Terms of Use",
            to: "https://test-craft.library.ucla.edu/privacy-terms-of-use",
            classes: null,
            target: "",
        },
        {
            id: "9511",
            name: "CCCreative Commons Attribution 4.0",
            to: "https://creativecommons.org/licenses/by/4.0/",
            classes: null,
            target: "1",
        },
    ],
}

export default {
    state: {
        nodes: mock.nodes,
    },
    getters: {
        getFooterSockNodes: (state) => state.nodes,
    },
    mutations: {},
    actions: {},
}
