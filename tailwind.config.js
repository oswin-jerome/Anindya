import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
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

    plugins: [forms, require("@tailwindcss/typography")],
};
