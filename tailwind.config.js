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
                'xlh1': ['2.015rem', '1.2'],
                'md:xlh1': ['3.25rem', '1.2'],
                'lg:xlh1': ['4rem', '1.2'],
                'xlh2': ['2.5rem', '1.2'], // 40px, line-height: 1.2
                'h1': ['2.2rem', '1.3'], // 32px, line-height: 1.3
                'md:h1': ['2.5rem', '1.3'],
                'lg:h1': ['2.8rem', '1.3'],
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
            animation: {
                'grain': 'grain 8s steps(10) infinite',
            },
            keyframes: {
                'grain': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '10%': { transform: 'translate(-5%, -5%)' },
                    '20%': { transform: 'translate(-10%, 5%)' },
                    '30%': { transform: 'translate(5%, -10%)' },
                    '40%': { transform: 'translate(-5%, 15%)' },
                    '50%': { transform: 'translate(-10%, 5%)' },
                    '60%': { transform: 'translate(15%, 0)' },
                    '70%': { transform: 'translate(0, 10%)' },
                    '80%': { transform: 'translate(-15%, 0)' },
                    '90%': { transform: 'translate(10%, 5%)' },
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '65ch',
                        fontSize: '1rem',
                        lineHeight: '1.75',
                        p: {
                            marginTop: '1.25em',
                            marginBottom: '1.25em',
                            lineHeight: '1.8', // equivalent to leading-relaxed
                            letterSpacing: '0.025em', // equivalent to tracking-wide
                        },
                        h1: {
                            fontSize: '2.25em',
                            marginTop: '0',
                            marginBottom: '0.8888889em',
                            lineHeight: '1.1111111',
                            letterSpacing: '0.025em', // tracking-wide
                        },
                        h2: {
                            fontSize: '1.8em',
                            marginTop: '2em',
                            marginBottom: '1em',
                            lineHeight: '1.3333333',
                            letterSpacing: '0.025em', // tracking-wide
                        },
                        h3: {
                            fontSize: '1.25em',
                            marginTop: '1.6em',
                            marginBottom: '0.6em',
                            lineHeight: '1.6',
                            letterSpacing: '0.025em', // tracking-wide
                        },
                        'ul > li': {
                            paddingLeft: '1.75em',
                        },
                        'ol > li': {
                            paddingLeft: '1.75em',
                        },
                    },
                },
                lg: {
                    css: {
                        fontSize: '1.125rem',
                        h1: {
                            fontSize: '2.5em',
                        },
                        h2: {
                            fontSize: '1.75em',
                        },
                        h3: {
                            fontSize: '1.375em',
                        },
                    },
                },
                xl: {
                    css: {
                        fontSize: '1.25rem',
                        h1: {
                            fontSize: '2.75em',
                        },
                        h2: {
                            fontSize: '2em',
                        },
                        h3: {
                            fontSize: '1.5em',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    variants: {
        extend: {
            padding: ['first', 'last'],
        },
    },
};
