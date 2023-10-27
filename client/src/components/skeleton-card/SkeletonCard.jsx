import styles from './styles.module.css';

const SkeletonCard = ({ isDarkMode }) => {
	const backgroundClass = isDarkMode ? 'dark-bg-dark-gray' : 'normal-bg-gray';
	const backGroundRadient = isDarkMode
		? styles.darkGradient
		: styles.normalGradient;

	return (
		<article
			className={`${backgroundClass} ${styles.article} ${backGroundRadient}`}
		>
			<header className={styles.headerOverlay}>
				<figure className={styles.figure}>
					<div className={styles.img}></div>
				</figure>
				<div className={styles.name}>
				</div>
			</header>
			<footer className={styles.footer}>
				<h3 className={styles.escuderias}>Escuderías</h3>
				<div className={styles.teams}>
                    <div className={styles.teamName}></div>
                    <div className={styles.teamName}></div>
                    <div className={styles.teamName}></div>
				</div>
			</footer>
		</article>
	);
};

export default SkeletonCard;
