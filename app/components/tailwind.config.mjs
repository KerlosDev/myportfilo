module.exports = {
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'spin-slow-reverse': 'spin 8s linear infinite reverse',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    variants: {},
    plugins: [],
}