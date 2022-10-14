import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import AllBooks from './pages/AllBooks';
import BookDetail from './pages/BookDetail';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate to="/books" />} />
				{/* 👆 this is to make a page default, like index */}
				<Route path="/books" element={<AllBooks />} />
				<Route path="/books/:quoteId" element={<BookDetail />}>
					<Route path="comments" element={<Comments />} />
					<Route
						path=""
						element={
							<div className="centered">
								<Link className="btn--flat" to={`comments`}>
									Load Comments
								</Link>
							</div>
						}
					/>
				</Route>
				<Route path="/new-books" element={<NewBook />} />
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
