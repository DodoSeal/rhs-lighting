/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "eos-yellow": "#e29f0a",
                "eos-black": "#000000",
                "eos-gray": {
                    100: "#615b6e",
                    200: "#20394f",
                    300: "#0d1b28"
                }
            }
        }
    },
    plugins: [],
}