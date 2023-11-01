import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { isURLValid } from '../../helpers/validateForm';
const DriverCard = ({ name, lastName, image, teams, id, isDarkMode, canNavigate }) => {
	const navigate = useNavigate();
	const backgroundClass = isDarkMode ? 'dark-bg-dark-gray' : 'normal-bg-gray';
	const backGroundRadient = isDarkMode? styles.darkGradient : styles.normalGradient;

	const teamsArray = teams ? teams : ['Ninguna'];
	const onClickNavigate = () => {
		if(!canNavigate) navigate(`/home/driver/${id}`);
	};
	return (
		<article
			className={`${backgroundClass} ${styles.article} ${backGroundRadient}`}
			onClick={onClickNavigate}
		>
			<header className={styles.headerOverlay}>
				<figure className={styles.figure}>
					{isURLValid(image) ? <img src={image} alt='Driver' className={styles.img} /> : <div className={`${styles.img} ${styles.imgNoLoad}`}></div>}
				</figure>
				<h1 className={styles.name}>
					{name} {lastName}
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
