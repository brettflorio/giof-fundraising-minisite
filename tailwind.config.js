module.exports = {
	/* TIP: Customize TailWind classes
	 * By setting theme variables in tailwind.config we can use custom TailWind
	 * classes
	 */
	theme: {
		extend: {
			colors: {
				// TIP: you can nest your properties.
				// Color scheme from https://coolors.co/05668d-028090-00a896-02c39a-f0f3bd
				primary: {
					// default: "#028090",
					default: "#66a9dd",
					dark: "#224870",
				},
				secondary: "#2A4494",
				dark: "#122C34",
				light: "#122C34",
			},
		},
	},
	variants: {
		borderWidth: ["responsive", "last", "hover", "focus"],
	},
	plugins: [],
};
