/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1080px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            maxWidth: {
                '1280': '1280px',
            },
            colors: {
                primary: {
                    'blue-1': '#3F6769',
                    'blue-2': '#4E999C',
                    'blue-3': '#B3FCFF',
                    'blue-4': '#8AD3DF',
                    'blue-5': '#3A8590',
                    'blue-6': '#F2F7F5',
                    'brown-1': '#9C623E',
                    'brown-2': '#E8AF8B',
                    'brown-3': '#543019',
                    'gray-1': '#616B6D',
                    'light-gray': '#F2F7F5',
                },
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'semplicita': ['SemplicitaPro', 'sans-serif'],
            },
            fontSize: {
                'xlh1': ['4rem', '1.2'], // 64px, line-height: 1.2
                'xlh2': ['2.5rem', '1.2'], // 40px, line-height: 1.2
                'h1': ['2.2rem', '1.3'], // 32px, line-height: 1.3
                'h2': ['1.5rem', '1.4'], // 24px, line-height: 1.4
                'h3': ['1.25rem', '1.5'], // 20px, line-height: 1.5
                'h4': ['1.125rem', '1.5'], // 18px, line-height: 1.5
                'h5': ['1rem', '1.6'], // 16px, line-height: 1.6
                'p': ['1.1rem', '1.6'], // 16px, line-height: 1.6
            },
            fontWeight: {
                'light': 300,
                'regular': 400,
                'medium': 500,
                'semi-bold': 600,
                'bold': 700,
            },
        },
    },
    variants: {
        extend: {
            padding: ['first', 'last'],
        },
    },
};
