// src/app/admin/manage-users/AddAgentForm.tsx
"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";

const AddAgentForm: React.FC<{
	onAgentAdded: () => void;
}> = ({ onAgentAdded }) => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [managerEmail, setManagerEmail] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, "agents"), {
				email,
				name,
				managerEmail,
				createdAt: serverTimestamp(),
				updatedAt: serverTimestamp(),
			});
			setName("");
			setEmail("");
			onAgentAdded(); // Notify parent to refresh the list
			setError(""); // Clear any previous errors
		} catch (error) {
			console.error("Error adding agent:", error);
			setError("Failed to add agent. Please try again.");
		}
	};

	return (
		<div className="bg-white p-6 rounded-lg shadow">
			<h3 className="text-xl font-semibold mb-4">Add New Agent</h3>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block font-medium mb-1" htmlFor="name">
						Name
					</label>
					<input
						id="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label className="block font-medium mb-1" htmlFor="email">
						Email
					</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label className="block font-medium mb-1" htmlFor="managerEmail">
						Manager Email
					</label>
					<input
						id="managerEmail"
						type="managerEmail"
						value={managerEmail}
						onChange={(e) => setManagerEmail(e.target.value)}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Add Agent
				</button>
			</form>
			{error && (
				<p className="mt-4 text-red-500 font-medium">
					{error}
				</p>
			)}
		</div>
	);
};

export default AddAgentForm;