import "./button.css";

const Button = ({
	children,
	variant = "primary",
	clickHandler,
	className = ""
}) => {
	if (
		!["primary", "secondary", "flat", "danger", "danger-flat"].includes(variant)
	) {
		throw new Error(
			"Invalid variant prop. Use 'primary', 'secondary', 'flat', 'danger', or 'danger-flat'."
		);
	}

	return (
		<button
			onClick={clickHandler}
			className={`button ${className} button-${variant}`}
		>
			{children}
		</button>
	);
};

export default Button;
