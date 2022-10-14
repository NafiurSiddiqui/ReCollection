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
import BookList from '../components/Books/BookList';
import NoBooksFound from '../components/Books/NoBooksFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/hooks/use-http';
import { getAllBooks } from '../lib/lib/api';

function AllBooks() {
	//get the datas
	const {
		sendRequest,
		status,
		data: loadedBooks,
		error,
	} = useHttp(getAllBooks, true);
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

	if (status === 'completed' && (!loadedBooks || loadedBooks.length === 0)) {
		return <NoBooksFound />;
	}

	return <BookList books={loadedBooks} />;
}
export default AllBooks;

/**
 * @useEffect - use this to send request when the component loads
 */
