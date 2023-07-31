const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "options",
                baseUrl: "src",
                aliases: {
                    "@": "./",
                    "@components": "./components",
                    "@features": "./features",
                    "@pages": "./pages",
                    "@layouts": "./layouts",
                }
            }
        }
    ]
};