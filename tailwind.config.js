/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				Cream: {
					background: "#F2EAE2",
				},
				Gunmetal: {
					title: "#1C232B",
				},

				Aurometal: {
					text: "#6C7289",
				},
				Aquamarine: {
					deep: "#3D8168",
					hover: "#1A4032",
				},
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				fraunces: ["Fraunces", "serif"],
			},
		},
	},
	plugins: [],
};
