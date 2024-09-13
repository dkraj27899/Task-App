// src/app/admin/manage-users/AgentList.tsx
"use client";

import { Agent } from "@/types/users";

interface AgentListProps {
	agents: Agent[];
}

const AgentList: React.FC<AgentListProps> = ({ agents }) => {
	return (
		<div className="bg-white p-4 rounded-lg shadow">
			<h2 className="text-xl font-semibold mb-4">Agents</h2>
			<ul className="space-y-2">
				{agents.map((agent) => (
					<li
						key={agent.id}
						className="bg-gray-100 p-3 rounded-md flex items-center justify-between"
					>
						<div>
							<h3 className="font-medium">{agent.name}</h3>
							<p className="text-gray-500">{agent.email}</p>
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

export default AgentList;
