import { NavLink } from "react-router-dom";
import type { User } from "../types/User"
export default ({user}:{user:User}) => {
	return <div className="shrink-1 grow-0 flex-auto p-2 rounded-md bg-gray-900 color-gray-400 cursor-pointer hover:bg-gray-700">
		<h3>{user.username || "Unknown"}</h3>
	</div>
}