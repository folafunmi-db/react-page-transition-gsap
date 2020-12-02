import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<NavLink
				to="/"
				exact
				activeStyle={{ fontWeight: "bold", color: "#653fff" }}
			>
				Home
			</NavLink>
			<NavLink
				to="/about"
				exact
				activeStyle={{ fontWeight: "bold", color: "#653fff" }}
			>
				About
			</NavLink>
		</div>
	);
};

export default Header;
