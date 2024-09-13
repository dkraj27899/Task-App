"use client";

import { Manager } from "@/types/users";

interface ManagerListProps {
	managers: Manager[];
}

const ManagerList: React.FC<ManagerListProps> = ({ managers }) => {
	return (
		<div className="bg-white p-4 rounded-lg shadow">
			<h2 className="text-xl font-semibold mb-4">Managers</h2>
			<ul className="space-y-2">
				{managers.map((manager) => (
					<li
						key={manager.id}
						className="bg-gray-100 p-3 rounded-md flex items-center justify-between"
					>
						<div>
							<h3 className="font-medium">{manager.name}</h3>
							<p className="text-gray-500">{manager.email}</p>
						</div>
						<button
							className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							View
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ManagerList;