import { Link } from 'react-router-dom';
import classes from './NoBooksFound.module.css';

const NoBooksFound = () => {
	return (
		<div className={classes.noquotes}>
			<p>NoThing yet. Wanna finish a book and remember it?:)</p>

			<Link className="btn" to={'/new-quotes'}>
				Add a Book
			</Link>
		</div>
	);
};

export default NoBooksFound;
