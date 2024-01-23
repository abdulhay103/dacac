const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "380px",
            // => @media (min-width: 380px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                md: "2rem",
                lg: "2rem",
                xl: "2rem",
                "2xl": "4rem",
            },
        },
        extend: {
            backgroundImage: {
                parallax: "url('/public/others/footer-bg-image.png')",
            },
        },
    },
    plugins: [],
});
