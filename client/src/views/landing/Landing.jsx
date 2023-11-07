import { Link } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeProvider';
import BackGroundVideo from '../../components/background-video/BackGroundVideo';
import F1 from '../../assets/icons/F1.svg';
import styles from './styles.module.css';
import ToggleDarkMode from '../../components/toggle-dark-mode/toggleDarkMode';

const Landing = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	const bgClass = isDarkMode ? styles.dark : styles.normal;
	return (
		<div className={styles.container}>
			<div className={`${bgClass} ${styles.containerToggle}`}>
				<ToggleDarkMode isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
			</div>
			<BackGroundVideo />
			<div className={`${styles.containerChild} ${bgClass}`}>
				<header className={styles.header}>
						<img src={F1} alt='F1' />
						<h1>SpeedMaster</h1>
				</header>
				<h3>
					¡Bienvenido al mundo de la Fórmula 1 en tu propia sala de estar! ¿Eres
					un apasionado de las carreras? Aquí te llevamos al corazón del mundo
					de la Fórmula 1, donde podrás explorar todos los detalles de tus
					pilotos favoritos y diseñar tu propio piloto de F1 personalizado.
					¿Listo para conocer a tus héroes en la pista y dar vida a tu piloto
					soñado? ¡Adéntrate en el emocionante universo de la F1!
				</h3>
				<Link to={'/home/drivers'}>
					<button>ENTRAR</button>
				</Link>
			</div>
		</div>
	);
};
export default Landing;
