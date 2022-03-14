import { useRef, useState } from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
	// state
	// const [isEntering, setIsEntering] = useState(false);

	//ref
	const authorInputRef = useRef();
	const textInputRef = useRef();

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		// optional: Could validate here

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	const formFocusHandler = () => {
		console.log('form active');
		//set state
		// setIsEntering(true);
	};

	return (
		<Card>
			<form
				onFocus={formFocusHandler}
				className={classes.form}
				onSubmit={submitFormHandler}
			>
				{props.isLoading && (
					<div className={classes.loading}>
						<LoadingSpinner />
					</div>
				)}

				<div className={classes.control}>
					<label htmlFor="author">Author</label>
					<input type="text" id="author" ref={authorInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="text">Text</label>
					<textarea id="text" rows="5" ref={textInputRef}></textarea>
				</div>
				<div className={classes.actions}>
					<button className="btn">Add Quote</button>
				</div>
			</form>
		</Card>
	);
};

export default QuoteForm;

/**
 * @onAddQuote - data of this form will be passed in, wherever we use this component.With this exact format. In our case, we used it inside <NewQuote/>
 * @formFocus - is to check if user activate the form and prompting a notification if tries to leave without finishing it.
 * @Prompt - will automatically watch if we navigate away and will prompt a notification if a condition is met.PROMPT is not avaialable router > v4.
 */
