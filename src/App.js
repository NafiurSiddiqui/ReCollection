import { Navigate, Route, Routes } from 'react-router-dom';
import AllQuotes from './pages/AllQuote';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate to="/quotes" />} />
				{/* 👆 this is to make a page default, like index */}
				<Route path="/quotes" element={<AllQuotes />} />
				<Route path="/quotes/:quoteId" element={<QuoteDetail />}>
					<Route path="comments" element={<Comments />} />
				</Route>
				<Route path="/new-quotes" element={<NewQuote />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;

/**
 *  we have nested route here for comments. we put it so through the <Outlet> component provided by React Router
 *
 * Route goes seraching down from top to bottom,
 * if none of the URL match, the last one will be shown.
 * @path = '*' means, should match any path.WE must place it at the bottom, this is if none of the url matches case.
 */
