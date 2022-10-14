import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>ReCollection</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink
							to="/books"
							className={(navData) => (navData.isActive ? classes.active : '')}
						>
							Your Books
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/new-books"
							className={(navData) => (navData.isActive ? classes.active : '')}
						>
							Add Notes
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
