import { Routes, Route } from 'react-router-dom';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import { ThemeProvider } from './theme/ThemeProvider';
import './App.css';

function App() {
	return (
		<ThemeProvider>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
