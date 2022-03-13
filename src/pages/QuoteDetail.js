import { Outlet, useParams } from 'react-router-dom';

// function QuoteDetail() {
// 	const params = useParams();

// 	return (
// 		<>
// 			<h1>Quote Detail</h1>
// 			<p>{params.quoteId}</p>
// 			<Outlet />
// 		</>
// 	);
// }
// export default QuoteDetail;

//--------------------------------------------------------------------------------------------------------------stage 2 (viewing full quote)

import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Max', text: 'Learning React is fun!' },
	{ id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

function QuoteDetail() {
	const params = useParams();
	//find the relevant quote match
	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	//a guard clause
	if (!quote) {
		return <p>Found no quote. :/</p>;
	}
	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Outlet />
		</>
	);
}
export default QuoteDetail;

/**
 * @params - this is how we extract our component id dynamically.
 *
 * @quote - we are saying, hey, go look inside the DUMMY_Data and look if any of the quote.id matches the paramsId.
 * paramsId = ':quoteId' path we set inside one of our Route inside App.
 *
 * @HighlightedQuotes - wants a text and author props, hence we feed it with the data which is in this comonent.
 */
