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
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                content: [
                    "Montserrat Alternates",
                    ...defaultTheme.fontFamily.serif,
                ],
                heading: ["Montserrat", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                app: {
                    primary: "#AF7141",
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
