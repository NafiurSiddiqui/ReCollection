// import QuoteList from '../components/quotes/QuoteList';

// const DUMMY_QUOTES = [
// 	{ id: 'q1', author: 'Max', text: 'Learning React is fun!' },
// 	{ id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
// ];

// function AllQuotes() {
// 	return <h1>All Quotes</h1>;
// }
// export default AllQuotes;

//--------------------------------------------------------------------------------------------------------------stage 2 (Addign dummy datas)

// function AllQuotes() {
// 	return <QuoteList quotes={DUMMY_QUOTES} />;
// }
// export default AllQuotes;

//--------------------------------------------------------------------------------------------------------------stage 3 (adding server data)
import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/hooks/use-http';
import { getAllQuotes } from '../lib/lib/api';

function AllQuotes() {
	//get the datas
	const {
		sendRequest,
		status,
		data: loadedQuotes,
		error,
	} = useHttp(getAllQuotes, true);
	//useEffect for sending request
	useEffect(() => {
		sendRequest();
	}, [sendRequest]);
	//checks
	if (status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
		return <NoQuotesFound />;
	}

	return <QuoteList quotes={loadedQuotes} />;
}
export default AllQuotes;

/**
 * @useEffect - use this to send request when the component loads
 */
