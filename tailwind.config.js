/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter_400: "Inter-Regular, cursive",
                inter_500: "Inter-Medium, cursive",
                aeonik: "Aeonik , cursive",
            },
        },
    },
    plugins: [],
};
