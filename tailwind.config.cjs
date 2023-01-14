/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                Playfair: "Playfair Display, serif",
                Raleway: "Raleway, sans-serif",
            },
            colors: {
                primary: "#181d29",
                primaryLight: "#191f2b",
                primarySlight: "#2d3748",
                secondary: "#95abf4",
                secondaryDark: "#6b8af0",
                light: "#efeff0",
            },
			container: {
                center: true,
            }, 
		},
	},
	plugins: [
		function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        maxWidth: "540px",
                    },
                    "@screen md": {
                        maxWidth: "720px",
                    },
                    "@screen lg": {
                        maxWidth: "960px",
                    },
                    "@screen xl": {
                        maxWidth: "1140px",
                    },
                },
            });
        },
	],
}
