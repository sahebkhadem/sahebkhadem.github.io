import { createContext, useContext, useState } from "react";
import data from "../assets/data.json";

// Create the context
const UserContext = createContext();

// Create a provider component
export const ContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(data.currentUser);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	return (
		<UserContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				isDeleteModalOpen,
				setIsDeleteModalOpen
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

// Custom hook to use the UserContext
export const useUser = () => {
	return useContext(UserContext);
};

// Custom hook to use the UserContext
export const useDeleteModal = () => {
	return useContext(UserContext);
};
