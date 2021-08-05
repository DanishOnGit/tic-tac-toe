import { Route, Routes } from 'react-router';
import { SelectSide, Home } from './pages';
import { Game } from './pages';
import './App.css';

 const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pick-side' element={<SelectSide />} />
				<Route path='/game' element={<Game />} />
			</Routes>
		</div>
	);
};
export default App