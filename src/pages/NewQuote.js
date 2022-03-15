// function NewQuote() {
// 	return <h1>New Quote</h1>;
// }
// export default NewQuote;

//--------------------------------------------------------------------------------------------------------------stage 2 (adding quote form and dummy data)

// import { useNavigate } from 'react-router-dom';
// import QuoteForm from '../components/quotes/QuoteForm';

// function NewQuote() {
// 	const navigate = useNavigate();
// 	const addQuoteHandler = (quoteData) => {
// 		console.log(quoteData);

// 		navigate('/quotes');
// 	};

// 	return <QuoteForm onAddQuote={addQuoteHandler} />;
// }

// export default NewQuote;

/**
 * @onAddQuote - here we get the data as we formatted inside props.onAddQuote({})
 * @useNavigate - this to specify what should happen when the user submit the quote. We submit the data and redirect the user to specified Path.
 */

//--------------------------------------------------------------------------------------------------------------stage3 (adding server side code)

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/hooks/use-http';
import { addQuote } from '../lib/lib/api';

function NewQuote() {
	//navigator
	const navigate = useNavigate();
	//custom http hook
	const { sendRequest, status } = useHttp(addQuote);

	//handling effect
	useEffect(() => {
		//we could check other status as well,
		//we just kept it with one for the demo
		if (status === 'completed') {
			navigate('/quotes');
		}
	}, [status, navigate]);

	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
		//send data to the server
		sendRequest(quoteData);

		// navigate('/quotes');
	};

	return (
		<QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
	);
}

export default NewQuote;

/**
 * here we send our newly created data to the server
 * @navigate - we only navigate the quotes once it is done sending with a 'completed' status
 *
 * @isLoading - we have the isLoading props on the form. Shows a spinner if the status is pending.
 *
 *
 */
