import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		background: {
			default: '#000000', // Matte black background
		},
		text: {
			primary: '#FFFFFF', // White text
		},
	},
});

export default function Layout({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
