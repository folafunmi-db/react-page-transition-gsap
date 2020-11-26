import "./App.scss";
import About from "./pages/about";
import Home from "./pages/home";
import Header from "./components/header";

import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

const routes = [
	{ path: "/", name: "Home", Component: Home },
	{ path: "/about", name: "About", Component: About },
];

function App() {
	return (
		<div>
			<Header />
			<div className="container">
				{routes.map(({ path, Component }) => (
					<Route key={"name"} path={path} exact>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={1200}
								classNames="page"
								unmountOnExit
							>
								<div className="page">
									<Component />
								</div>
							</CSSTransition>
						)}
					</Route>
				))}
			</div>
		</div>
	);
}

export default App;
