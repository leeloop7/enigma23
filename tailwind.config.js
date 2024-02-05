module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        colors: {
            dark: "#2b3b46",
            gray: "#a2a9ad",
            pink: "#9e005d",
            lime: "#9cb227",
            light: "#eae2d5",
            white: "#FFFFFF",
        },
        extend: {
            spacing: {
                128: "32rem",
                192: "48rem",
                256: "64rem",
            },
            fontFamily: {
                barlow: ["Barlow", "sans-serif"],
            },
            height: {
                128: "32rem",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
