import styles from './styles.module.css';

const ToggleDarkMode = ({ isDarkMode, toggleTheme }) => {
	return (
		<div
			className={`${styles.darkModeToggle} ${
				isDarkMode ? styles.dark : styles.light
			}`}
		>
			<input
				type='checkbox'
				id='darkModeToggle'
				checked={isDarkMode}
				onChange={toggleTheme}
			/>
			<label htmlFor='darkModeToggle'></label>
		</div>
	);
};

export default ToggleDarkMode;
