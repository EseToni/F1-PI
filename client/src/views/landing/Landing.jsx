import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { actionFetchAllDrivers } from '../../redux/actions/actionsDrivers';
import { useTheme } from '../../theme/ThemeProvider';

const Landing = () => {
	// const dispatch = useDispatch();
	const { isDarkMode, toggleTheme } = useTheme();
	
	// useEffect(() => {
	// 	dispatch(actionFetchAllDrivers());

	// }, [dispatch]);

	return (
		<div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
			Landing
			<Link to={'/home'}>
				<button>Entrar!</button>
			</Link>
			<button onClick={toggleTheme}> change color</button>
		</div>
	);
};
export default Landing;
