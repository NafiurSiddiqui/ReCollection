import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
	return (
		<Fragment>
			<ul className={classes.list}>
				{props.quotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;

/**
 * @props - will be whatever we pass in with the same name as 'quote' where this component will be used. In our case, inside All quotes.
 */
