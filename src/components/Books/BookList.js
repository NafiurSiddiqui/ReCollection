import { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookItem from './BookItem';
import classes from './BookList.module.css';

//sorting algorithm
const sortBooks = (books, ascending) => {
	return books.sort((bookA, bookB) => {
		if (ascending) {
			return bookA.id > bookB.id ? 1 : -1;
		} else {
			return bookA.id < bookB.id ? 1 : -1;
		}
	});
};

const BookList = (props) => {
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
	const sortedBooks = sortBooks(props.books, isSortingAscending);

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
				{sortedBooks.map((book) => (
					<BookItem
						key={book.id}
						id={book.id}
						author={book.author}
						text={book.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default BookList;

/**
 * @props - will be whatever we pass in with the same name as 'quote' where this component will be used. In our case, inside All Books.
 *
 * @URLSearchParams - is a JS feature.
 * @changeSortingHandler - we r looking for a match and if the searchParam is set on 'asc' (ascending mode) we wanna flip to 'desc' (descending mode).
 */
