// src/app/admin/manage-users/AddManagerForm.tsx
"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/clientApp";

const AddManagerForm: React.FC<{ onManagerAdded: () => void }> = ({
	onManagerAdded,
}) => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, "managers"), {
				email,
				name,
				password, // Note: Store hashed passwords, not plain text
				createdAt: serverTimestamp(),
				updatedAt: serverTimestamp(),
			});
			setName("");
			setEmail("");
			setPassword("");
			onManagerAdded(); // Notify parent to refresh the list
			setError(""); // Clear any previous errors
		} catch (error) {
			console.error("Error adding manager:", error);
			setError("Failed to add manager. Please try again.");
		}
	};

	return (
		<div className="bg-white p-6 rounded-lg shadow">
			<h3 className="text-xl font-semibold mb-4">Add New Manager</h3>
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
					<label className="block font-medium mb-1" htmlFor="password">
						Password
					</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Add Manager
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

export default AddManagerForm;