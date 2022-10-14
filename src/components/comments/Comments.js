import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/hooks/use-http';
import { getAllComments } from '../../lib/lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);

	//param
	const params = useParams();
	//get the quoteId
	const { quoteId } = params;
	// 👆 this is to avoid unnecessary re-execution of the useEffect by setting the params as a whole.
	//get the comments
	const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
	//handling effect of HTTP request
	useEffect(() => {
		sendRequest(quoteId);
	}, [quoteId, sendRequest]);

	//handlers
	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addedCommentHandler = useCallback(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	//conditions

	let comments;

	if (status === 'pending') {
		comments = (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (status === 'completed' && loadedComments && loadedComments.length > 0) {
		comments = <CommentsList comments={loadedComments} />;
	}

	if (
		status === 'completed' &&
		(!loadedComments || loadedComments.length === 0)
	) {
		comments = <p className="centered">No comments are added yet. </p>;
	}
	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className="btn" onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />
			)}
			{comments}
		</section>
	);
};

export default Comments;

/**
 * @useParam - here we use this hook, since we know that we will always use this comoponent where the URL contains the quoteId parameter.
 * hence, this is how we pass the qutoeId to newCommentForm via useParam.
 * @useHttp
 * @getAllComments
 * 👆 these 2 are our custom functions and hook
 *
 * @useEffect -we wanna fetch the data, whenever this component is loaded or changed, hence, right time to use a .
 * @useCallBack - it is used to prevent a function from getting executed on every render. In this case, our onAddedComment has its dependancy inside the <NewCommentForm/>, where this function gets called everytime this parent component rerenders(<Comments>). Hence, using callBack will prevent it from re render. In this case, this function will only run when the dependancy changes (e.g. quoteId, sendRequest). Now the new comment will be immediately rendered.
 *
 */
