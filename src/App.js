import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
	const [mode, setMode] = useState('dark');
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
			showAlert('success', 'Light Mode has Enabled.');
		}
		if (mode === 'light') {
			setMode('dark');
			showAlert('success', 'Dark Mode has Enabled.');
		}
	}

	return (
		<>
			{/* For Github - removed routing (git not support it) */}
			<div className="App">
				<Navbar mode={mode} title="TextUtils" toggleMode={toggleMode} />
				<div style={{ height: '100px' }}>
					<Alert alert={alert} />
				</div>
				<div className="container">
					<TextForm mode={mode} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} />
				</div>
			</div>


			{/* For Servers */}
			{/* <div className="App">
				<Router>
					<Navbar mode={mode} toggleMode={toggleMode} />
					<div style={{ height: '100px' }}>
						<Alert alert={alert} />
					</div>
					<div className="container">
						<Routes>
							<Route index exact path="/" element={<TextForm mode={mode} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} />} />
							<Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
						</Routes>
					</div>
				</Router>
			</div> */}
		</>
	);
}
/* For <Route> path
with "exact" keyword
/users ----> Users component

without "exact" keyword
/users/john ----> John component 
*/

export default App;
