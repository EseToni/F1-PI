import styles from './styles.module.css';
import Sun from '../../assets/icons/PhSun.svg';
import Moon from '../../assets/icons/PhMoon.svg';

const ToggleDarkMode = ({ isDarkMode, toggleTheme }) => {
	return (
		<div className={styles.container}>
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
			{isDarkMode ? <img src={Moon} /> : <img src={Sun} />}
		</div>
	);
};

export default ToggleDarkMode;
