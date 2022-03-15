import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/hooks/use-http';
import { addComment } from '../../lib/lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
	const commentTextRef = useRef();
	const { sendRequest, status, error } = useHttp(addComment);
	//get the id from the URL
	// const params = useParams();
	//get a function from the props
	const { onAddedComment } = props;

	//handle the sideEffect, let the component know about the status

	useEffect(() => {
		if (status === 'completed' && !error) {
			//we call this function once we r done adding the comment

			onAddedComment();
		}
	}, [status, error, onAddedComment]);
	const submitFormHandler = (event) => {
		event.preventDefault();

		//get the comment
		const enteredText = commentTextRef.current.value;

		// optional: Could validate here
		sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
		// send comment to server
	};

	return (
		<form className={classes.form} onSubmit={submitFormHandler}>
			{status === 'pending' && (
				<div className="centered">
					<LoadingSpinner />
				</div>
			)}
			<div className={classes.control} onSubmit={submitFormHandler}>
				<label htmlFor="comment">Your Comment</label>
				<textarea id="comment" rows="5" ref={commentTextRef}></textarea>
			</div>
			<div className={classes.actions}>
				<button className="btn">Add Comment</button>
			</div>
		</form>
	);
};

export default NewCommentForm;

/**
 * @useParams -  can be used, where the URL wil contain the this quoteId.But we can not use this component anywhere where the URL does NOT contain the quoteId. We can restricted this component like this.
 * @props - we can make this component avilable app wide if we use props for the quoteid.
 * so, we pass this quoteId as props in the send request.
 *
 * we will add this props as attributes whereever we use this component and has the data we need.
 *
 */
