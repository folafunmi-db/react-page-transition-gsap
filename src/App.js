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
	const onEnter = (node) => {
		//enter animation
		gsap.from(
			[
				node.children[0].firstElementChild,
				node.children[0].lastElementChild,
			],
			0.6,
			{
				y: 30,
				delay: 0.6,
				ease: "power3.easeInOut",
				opacity: 0,
				stagger: 0.6,
			}
		);
	};

	const onExit = (node) => {
		//exit animation
		gsap.to(
			[
				node.children[0].firstElementChild,
				node.children[0].lastElementChild,
			],
			0.6,
			{
				y: -30,
				ease: "power3.easeInOut",
				stagger: 0.6,
			}
		);
	};

	return (
		<div className="App">
			<Header />
			<div className="container">
				{routes.map(({ path, Component }) => (
					<Route key={"name"} path={path} exact>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={1200}
								classNames="page"
								onExit={onExit}
								onEnter={onEnter}
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
