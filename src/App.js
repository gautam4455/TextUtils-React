import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const showAlert = (type, message) => {
		setAlert({
			type: type,
			msg: message
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	}

	const toggleMode = () => {
		if (mode === 'dark') {
			setMode('light');
			showAlert('success', 'Dark Mode has Enabled.');
		}
		else {
			setMode('dark');
			showAlert('success', 'Light Mode has Enabled.');
		}
	}

	return (
		<>
			{/* For Github - remove routing (it not support) */}
			{/* <div className="App">
				<Navbar mode={mode} toggleMode={toggleMode} />
				<Alert alert="This is alert."/>
				<div className="container">
					<TextForm mode={mode} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert}/>
					<About mode={mode} toggleMode={toggleMode} />
				</div>
			</div> */}


			{/* For Servers */}
			<div className="App">
				<Router>
					<Navbar mode={mode} toggleMode={toggleMode} />
					<div style={{ height: '100px' }}>
						<Alert alert={alert} />
					</div>
					<div className="container">
						<Routes>
							{/* 
							with "exact" keyword
							/users ----> Users component
							
							without "exact" keyword
							/users/john ----> John component 
							*/}

							<Route index exact path="/" element={<TextForm mode={mode} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} />} />
							<Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
						</Routes>
					</div>
				</Router>
			</div>
		</>
	);
}

export default App;
