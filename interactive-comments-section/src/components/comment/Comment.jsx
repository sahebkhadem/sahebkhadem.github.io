import { useState } from "react";
import VoteCounter from "./vote-counter/VoteCounter";
import TextBox from "../text-box/TextBox";
import Button from "../button/Button";
import iconReply from "../../assets/icon-reply.svg";
import iconDelete from "../../assets/icon-delete.svg";
import iconEdit from "../../assets/icon-edit.svg";
import { useUser, useDeleteModal } from "../../context/Context";

import "./comment.css";

const Comment = ({ comment }) => {
	const { currentUser } = useUser();
	const { setIsDeleteModalOpen } = useDeleteModal();
	const { user, content, createdAt, replies, score } = comment;
	const [isReplying, setIsReplying] = useState(false);
	const [replyText, setReplyText] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(content);

	const handleReplyClick = () => {
		setIsReplying(!isReplying);
	};

	const handleReplyChange = (e) => {
		setReplyText(e.target.value);
	};

	const handleReplySubmit = () => {
		// Handle reply submission logic here
		setReplyText("");
		setIsReplying(false);
	};

	const handleDelete = () => {
		// Handle delete logic here
		setIsDeleteModalOpen(true);
	};

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleEditChange = (e) => {
		setEditText(e.target.value);
	};

	const handleEditSubmit = () => {
		// Handle edit submission logic here
		console.log("Edit submitted:", editText);
		setIsEditing(false);
	};

	const isCurrentUser = currentUser?.username === user.username;

	return (
		<div className="comment">
			<div className={`comment-body ${isReplying ? "replying" : ""}`}>
				<VoteCounter score={score} />

				<div className="comment-content-wrapper">
					<div className="comment-header">
						<div className="comment-info">
							<img
								src={user.image.png}
								alt={`${user.username}'s avatar`}
								className="avatar"
							/>
							<span className="rubik-medium">{user.username}</span>
							<span className="created-at">{createdAt}</span>
						</div>
						<div className="comment-actions">
							{isCurrentUser ? (
								<>
									<Button variant="danger-flat" clickHandler={handleDelete}>
										<img src={iconDelete} alt="Delete icon" />
										Delete
									</Button>
									<Button variant="flat" clickHandler={handleEditClick}>
										<img src={iconEdit} alt="Edit icon" />
										Edit
									</Button>
								</>
							) : (
								<Button variant="flat" clickHandler={handleReplyClick}>
									<img src={iconReply} alt="Reply icon" />
									Reply
								</Button>
							)}
						</div>
					</div>
					{isEditing ? (
						<div className="update-textbox-wrapper">
							<TextBox
								value={editText}
								buttonText="UPDATE"
								changeHandler={handleEditChange}
							/>
							<Button variant="primary" clickHandler={handleEditSubmit}>
								UPDATE
							</Button>
						</div>
					) : (
						<p className="comment-content">{content}</p>
					)}
				</div>
			</div>
			{/* Reply input */}
			{isReplying && (
				<div className="reply-wrapper">
					<img
						src={user.image.png}
						alt={`${user.username}'s avatar`}
						className="avatar"
					/>
					<TextBox
						value={replyText}
						buttonText="REPLY"
						changeHandler={handleReplyChange}
						submitHandler={handleReplySubmit}
					/>
				</div>
			)}

			{/* Replies */}
			{replies && replies.length > 0 && (
				<div className="replies">
					{replies.map((reply) => (
						<Comment key={reply.id} comment={reply} />
					))}
				</div>
			)}
		</div>
	);
};

export default Comment;
