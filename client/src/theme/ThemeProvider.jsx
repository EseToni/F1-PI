// ThemeContext.js
import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
  
	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.remove('normal-bg-white');
			document.body.classList.add('dark-bg-night-blue');
		} else {
			document.body.classList.remove('dark-bg-night-blue');
			document.body.classList.add('normal-bg-white');
		}
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
