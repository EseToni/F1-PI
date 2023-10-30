import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import useGetDriver from '../../hooks/useGetDriver';
import { Link } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeProvider';
const DriverDetail = () => {
	let { driverId } = useParams();
	const { isDarkMode } = useTheme();
	const { name, lastname, image, description, dateOfBirth, teams , nationality} =
		useGetDriver({ driverId });
	const teamsArray = teams ? teams : ['Ninguna'];
	const biografy = description ? description : 'No hay biografía disponible';
	const radiantClass = isDarkMode ? styles.darkGradient : styles.normalGradient;
	return (
		<div className={`${styles.containerMain} `}>
			<div className={styles.containerNav}>
				<Link to='/home/drivers'>
					<button className={styles.button}>Home</button>
				</Link>
				<h1> DETALLES DEL PILOTO</h1>
				<div>
					<button className={styles.button}>{`<< anterior`}</button>
					<button className={styles.button}>{`siguiente >>`}</button>
				</div>
			</div>
			<article className={`${styles.containerArticle} ${radiantClass}`}>
				<figure>
					<img src={image} alt='Driver' className={styles.img} />
				</figure>
				<header className={styles.header}>
					<h1 className={styles.name}>
						{name} <span style={{ color: '#dc0000' }}>{lastname}</span>
					</h1>
					<h2>
						Fecha de nacimiento:{''}
						<span style={{ color: '#dc0000', marginLeft: '1vh' }}>
							{dateOfBirth}
						</span>
					</h2>
					<h2>
						Nacionalidad:{''}
						<span style={{ color: '#dc0000', marginLeft: '1vh' }}>
							{nationality}
						</span>
					</h2>
					<h2>
						<span style={{ marginRight: '1vh' }}>Escuderias:</span>
						{teamsArray.map((team, index) => (
							<span
								key={index++}
								style={{
									color: index % 2 === 0 ? '' : 'red',
									marginRight: '0.3vh',
								}}
								className={styles.teamName}
							>
								{team}
								{index < teamsArray.length - 1 ? ', ' : ''}{' '}
							</span>
						))}
					</h2>
					<footer className={styles.footer}>
						<h2>Biografia: </h2>
						<h3>{biografy}</h3>
					</footer>
				</header>
			</article>
		</div>
	);
};

export default DriverDetail;
