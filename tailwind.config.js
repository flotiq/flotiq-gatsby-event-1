module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#5DA3D0',
                blue: '#4689B4',
                'dark-blue': '#165B88',
                'light-gray': '#F0F0F0',
                gray: '#E0E0E0',
                red: '#FF5151',
            },
            fontFamily: {
                lora: ['Lora', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
