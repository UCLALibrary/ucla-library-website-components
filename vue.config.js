module.exports = {
    lintOnSave: process.env.NODE_ENV !== "production",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/styles/variables-scss.scss";
              `,
            },
        },
    },
}
