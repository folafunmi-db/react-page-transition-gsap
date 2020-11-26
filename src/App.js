import "./App.scss";
import About from "./pages/about";
import Home from "./pages/home";

import { Route } from "react-router-dom";

const routes = [
	{ path: "/", name: "Home", Component: Home },
	{ path: "/about", name: "About", Component: About },
];

function App() {
	return (
		<div className="App">
			{routes.map(({ path, Component }) => (
				<Route key={"name"} path={path} exact>
					<div className="page">
						<Component />
					</div>
				</Route>
			))}
		</div>
	);
}

export default App;
