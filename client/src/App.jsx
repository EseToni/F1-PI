import { Routes, Route } from 'react-router-dom';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import { ThemeProvider } from './theme/ThemeProvider';
import DriverDetail from './components/driver-detail/DriverDetail';
import DriversMain from './views/drivers-main/DriversMain';
import CreateDriver from './views/create-driver/CreateDriver';
import './App.css';

function App() {
	return (
		<ThemeProvider>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/home' element={<Home />}>
					<Route path='/home/drivers' element={<DriversMain />} />
					<Route path='/home/driver/:driverId' element={<DriverDetail />} />
					<Route path='/home/create-driver' element={<CreateDriver />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
