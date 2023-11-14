import AgreeDark from '../../assets/icons/AgreeDark.svg';
import AgreeLight from '../../assets/icons/AgreeNormal.svg';
import styles from './styles.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const ListTeams = ({ isDarkMode, driverTeam, action, inputRef }) => {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();
	const teams = useSelector((state) => state.driverReducer.teams);
	const classAnimate = active
		? styles.animateClick
		: styles.animateClickReverse;
	return (
		<div className={styles.containerList}>
			{isDarkMode ? (
				<img
					src={AgreeLight}
					onClick={() => {
						setActive(!active);
						inputRef.current.focus();
					}}
					className={classAnimate}
				/>
			) : (
				<img
					src={AgreeDark}
					onClick={() => {
						setActive(!active);
						inputRef.current.focus();
					}}
					className={classAnimate}
				/>
			)}
			{active && (
				<div className={`${styles.containerUl} `}>
					<ul className={styles.ul}>
						{teams.map((team) => (
							<li
								key={team.id}
								onClick={() => {
									dispatch(
										action({
											name: 'teams',
											value: `${driverTeam} ${team.name},`,
										})
									);
									inputRef.current.focus();
									setActive(false);
								}}
								className={styles.li}
							>
								{team.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default ListTeams;
