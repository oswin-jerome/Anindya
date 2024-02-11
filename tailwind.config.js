import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    corePlugins: {
        container: false,
    },
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        fontSize: {
            sm: "0.8rem",
            base: "16px",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                app: {
                    primary: "#623412",
                    bg: "#F3F3F3",
                },
            },
        },
    },

    plugins: [
        forms,
        require("@tailwindcss/typography"),
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "98vw",
                    "@screen sm": {
                        maxWidth: "95vw",
                    },
                    "@screen md": {
                        maxWidth: "90vw",
                    },
                    "@screen lg": {
                        maxWidth: "90vw",
                    },
                    "@screen xl": {
                        maxWidth: "90vw",
                    },
                },
            });
        },
    ],
};
