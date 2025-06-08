import "./text-box.css";

import Button from "../button/Button";

const TextBox = ({ value, buttonText, changeHandler, submitHandler }) => {
	return (
		<div className="textbox-input">
			<textarea
				value={value}
				onChange={changeHandler}
				placeholder="Add a reply..."
				className="textbox-textarea rubik-normal"
				name="textbox-input"
			/>

			{buttonText !== "UPDATE" ? (
				<Button variant="primary" clickHandler={submitHandler}>
					{buttonText}
				</Button>
			) : (
				""
			)}
		</div>
	);
};

export default TextBox;
