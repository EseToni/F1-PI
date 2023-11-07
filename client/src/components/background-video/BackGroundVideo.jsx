import { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import VideoF1 from '../../assets/video/videoF1.webm'

const BackGroundVideo = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		videoRef.current.play();
	}, []);

	return (
		<div className={styles.container}>
			<video ref={videoRef} autoPlay muted loop playsInline>
				<source src={VideoF1} type='video/webm' />
			</video>
		</div>
	);
};

export default BackGroundVideo;
