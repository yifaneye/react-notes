import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({apps}) => (
	<ul>
		{apps.map((app, i) =>
			<li key={i}>{app}</li>
		)}
	</ul>
);

export default App;
