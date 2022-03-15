import { Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

//sorting algorithm
const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

const QuoteList = (props) => {
	//to navigate
	const navigate = useNavigate();
	//to get the current URL
	const location = useLocation();
	//query parameter
	const queryParams = new URLSearchParams(location.search);
	//checking for search param value
	const isSortingAscending = queryParams.get('sort') === 'asc';
	//testing location obj
	// console.log(location);

	//using the sort
	const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

	//function for sorting
	const changeSortingHandler = () => {
		//will updtae the URL with a sharable query parameter
		//--------------------------------------------------------------------------------------------------------------stage1
		// navigate('?sort=' + (isSortingAscending ? 'desc' : 'asc'));
		//--------------------------------------------------------------------------------------------------------------stage 2 (more readable)
		navigate({
			pathname: location.pathname,
			search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
		});
		console.log(location.pathname);
	};

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>
					Sort {isSortingAscending ? 'Descending' : 'Ascending'}
				</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map((quote) => (
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
 *
 * @URLSearchParams - is a JS feature.
 * @changeSortingHandler - we r looking for a match and if the searchParam is set on 'asc' (ascending mode) we wanna flip to 'desc' (descending mode).
 */
