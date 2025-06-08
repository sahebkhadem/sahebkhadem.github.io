import { useState } from "react";
import "./vote-counter.css";

import iconPlus from "../../../assets/icon-plus.svg";
import iconMinus from "../../../assets/icon-minus.svg";

// VoteCounter component handles upvoting and downvoting logic
const VoteCounter = () => {
	// State to keep track of the current vote count
	const [voteCount, setVoteCount] = useState(0);
	// State to track the user's vote: 'up', 'down', or null (no vote)
	const [userVote, setUserVote] = useState(null);

	// Handle upvote button click
	const handleUpvote = () => {
		if (userVote === "up") {
			// If already upvoted, remove the upvote
			setVoteCount((c) => c - 1);
			setUserVote(null);
		} else if (userVote === "down") {
			// If previously downvoted, switch to upvote (+2)
			setVoteCount((c) => c + 2);
			setUserVote("up");
		} else {
			// If no previous vote, add an upvote
			setVoteCount((c) => c + 1);
			setUserVote("up");
		}
	};

	// Handle downvote button click
	const handleDownvote = () => {
		if (userVote === "down") {
			// If already downvoted, remove the downvote
			setVoteCount((c) => c + 1);
			setUserVote(null);
		} else if (userVote === "up") {
			// If previously upvoted, switch to downvote (-2)
			setVoteCount((c) => c - 2);
			setUserVote("down");
		} else {
			// If no previous vote, add a downvote
			setVoteCount((c) => c - 1);
			setUserVote("down");
		}
	};

	return (
		<div className="vote-counter">
			{/* Upvote button */}
			<button
				className={`vote-button${userVote === "up" ? " active" : ""}`}
				onClick={handleUpvote}
			>
				<img src={iconPlus} alt="Plus" />
			</button>
			{/* Display current vote count */}
			<span className="vote-count">{voteCount}</span>
			{/* Downvote button */}
			<button
				className={`vote-button${userVote === "down" ? " active" : ""}`}
				onClick={handleDownvote}
			>
				<img src={iconMinus} alt="Minus" />
			</button>
		</div>
	);
};

export default VoteCounter;
