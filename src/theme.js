import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#621247',
		},
		secondary: {
			main: '#f50057',
		},
	},
	typography: {
		fontFamily: 'Ubuntu',
		h1: {
			fontFamily: `"PoetsenOne", sans-serif`,
		},
		h2: {
			fontFamily: `"PoetsenOne", sans-serif`,
		},
		h3: {
			fontFamily: `"PoetsenOne", sans-serif`,
		},
		h4: {
			fontFamily: `"PoetsenOne", sans-serif`,
		},
		button: {
			fontFamily: `"PoetsenOne", sans-serif`, // Set the font family for buttons to inherit from the global typography
		},
	},
});

export default theme;