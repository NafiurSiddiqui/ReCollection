import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Max', text: 'Learning React is fun!' },
	{ id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

// function AllQuotes() {
// 	return <h1>All Quotes</h1>;
// }
// export default AllQuotes;

//--------------------------------------------------------------------------------------------------------------stage 2 (Addign dummy datas)

function AllQuotes() {
	return <QuoteList quotes={DUMMY_QUOTES} />;
}
export default AllQuotes;
