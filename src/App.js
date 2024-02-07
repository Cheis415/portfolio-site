import './App.css';
import Home from './components/Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import {
	projectObj,
	projectObj2,
	projectObj3,
	projectObj4,
} from './components/ProjectDetails/Data';
import Portfolio from './components/Portfolio';
import ScrollToTop from './ScrollToTop';

function App() {
	
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/details" element={<ProjectDetails {...projectObj} />} exact />
					<Route path="/details2" element={<ProjectDetails {...projectObj2} />} exact />
						
					<Route path="/details3" element={<ProjectDetails {...projectObj3} />} exact />
						
					<Route path="/details4" element={<ProjectDetails {...projectObj4} />} exact />
						
					<Route path="/projects" element={<Portfolio />} exact />
						
					
				</Routes>
			</ScrollToTop>
		</Router>
	);
}

export default App;
