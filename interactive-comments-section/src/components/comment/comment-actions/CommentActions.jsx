import Button from "../../button/Button";
import iconReply from "../../../assets/icon-reply.svg";
import iconDelete from "../../../assets/icon-delete.svg";
import iconEdit from "../../../assets/icon-edit.svg";

import "./comment-actions.css";

const CommentActions = ({
	isCurrentUser,
	handleDelete,
	handleEditClick,
	handleReplyClick
}) => {
	return (
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
	);
};

export default CommentActions;
