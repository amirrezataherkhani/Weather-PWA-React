/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "earth-image": "url('/public/images/mainpage.jpg')",
            },
        },
    },
    plugins: [],
};
