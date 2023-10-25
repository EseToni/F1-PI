import styles from './styles.module.css';
import { useSelector } from 'react-redux';
const DriverCard = ({ name, lastname, image, teams, id, isDarkMode }) => {
	const backgroundClass = isDarkMode ? 'dark-bg-dark-gray' : 'normal-bg-gray';
	const backGroundRadient = isDarkMode
		? styles.darkGradient
		: styles.normalGradient;
	const isLoading = useSelector((state) => state.driverReducer.isLoading);

	const teamsArray = teams ? teams : ['Ninguna'];

	return (
		<article
			className={`${backgroundClass} ${styles.article} ${backGroundRadient}`}
		>
			<header className={styles.headerOverlay}>
				<figure className={styles.figure}>
					<img src={image} alt='Driver' className={styles.img} />
				</figure>
				<h1 className={styles.name}>
					{name} {lastname}
				</h1>
			</header>
			<footer className={styles.footer}>
				<h3 className={styles.escuderias}>Escuderías</h3>
				<div className={styles.teams}>
					{teamsArray.map((team, index) => (
						<span
							key={index++}
							style={{
								color: index % 2 === 0 ? '' : 'red',
							}}
							className={styles.teamName}
						>
							{team}
							{index < teamsArray.length - 1 ? ', ' : ''}{' '}
						</span>
					))}
				</div>
			</footer>
		</article>
	);
};

export default DriverCard;
