export default {
    state: {
        askALibrarian: {
            id: "7322",
            askALibrarianTitle: "Have further questions?",
            askALibrarianText:
                "<p>We're here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.</p>",
            buttonUrl: [
                {
                    buttonText: "Contact us",
                    buttonUrl: "/help/",
                },
            ],
        },
    },
    getters: {
        getAskALibrarianData: (state) => state.askALibrarian,
    },
    mutations: {},
    actions: {},
}
