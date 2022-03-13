// function NewQuote() {
// 	return <h1>New Quote</h1>;
// }
// export default NewQuote;

//--------------------------------------------------------------------------------------------------------------stage 2 (adding quote form and dummy data)

import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

function NewQuote() {
	const navigate = useNavigate();
	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);

		navigate('/quotes');
	};

	return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;

/**
 * @onAddQuote - here we get the data as we formatted inside props.onAddQuote({})
 * @useNavigate - this to specify what should happen when the user submit the quote. We submit the data and redirect the user to specified Path.
 */
