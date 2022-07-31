/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "earth-image": "url('/public/images/mainpage.jpg')",
            },
        },
        screens: {
            sm: { max: "767px" },
            md: { min: "768px", max: "1023px" },
            lg: { min: "1024px", max: "1279px" },
            xl: { min: "1280px", max: "1535px" },
            "2xl": { min: "1536px" },
        },
    },
    plugins: [],
};
