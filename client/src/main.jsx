import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/state.js';
import App from './App.jsx';
import './index.css';
import './theme/theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
		<Provider store={store} >
			<App />
		</Provider>
		</BrowserRouter>
	</React.StrictMode>
);