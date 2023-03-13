/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				grey: {
					background: "#D5E1EF",
					font: "#7D889E",
				},
				Navy: {
					dark: "#1F314F",
				},
			},
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
			},
		},
	},
	plugins: [],
};
