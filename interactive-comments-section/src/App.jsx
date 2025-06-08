import { useState, useEffect } from "react";
import "./App.css";
import data from "./assets/data.json";
import Comment from "./components/comment/Comment";
import Button from "./components/button/Button";
import { useUser, useDeleteModal } from "./context/Context";

function App() {
	const { currentUser } = useUser();
	const { isDeleteModalOpen, setIsDeleteModalOpen } = useDeleteModal();
	const [comments, setComments] = useState(data.comments);
	const [newComment, setNewComment] = useState("");

	const handleNewCommentChange = (e) => {
		setNewComment(e.target.value);
	};

	const closeModal = () => {
		setIsDeleteModalOpen(false);
	};

	useEffect(() => {
		if (isDeleteModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		// Optional cleanup in case component unmounts
		return () => (document.body.style.overflow = "");
	}, [isDeleteModalOpen]);

	return (
		<main className={`rubik-normal ${isDeleteModalOpen ? "modal-open" : ""}`}>
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}

			<div className="comment-input">
				<img
					src={currentUser.image.png}
					alt={`${currentUser.username}'s avatar`}
					className="avatar"
				/>
				<textarea
					value={newComment}
					onChange={handleNewCommentChange}
					placeholder="Add a comment..."
					className="comment-textarea"
					name="comment-input"
				/>
				<Button variant="primary">SEND</Button>
			</div>

			{isDeleteModalOpen && (
				<>
					<div className="modal">
						<h2 className="modal-header">Delete comment</h2>
						<p className="modal-text">
							Are you sure you want to delete this comment? This will remove the
							comment and can't be undone.
						</p>
						<div className="modal-actions">
							<Button variant="secondary" clickHandler={closeModal}>
								NO, CANCEL
							</Button>
							<Button variant="danger" clickHandler={closeModal}>
								YES, DELETE
							</Button>
						</div>
					</div>
					<div className="modal-backdrop" onClick={closeModal}></div>
				</>
			)}
		</main>
	);
}

export default App;
