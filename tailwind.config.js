/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",       // App Router
        "./pages/**/*.{js,ts,jsx,tsx}",     // Pages Router (opcional)
        "./components/**/*.{js,ts,jsx,tsx}",// Componentes
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
