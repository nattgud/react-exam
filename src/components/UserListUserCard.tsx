import { NavLink } from "react-router-dom";
import type { User } from "../types/User"
export default ({user}:{user:User}) => {
	return <NavLink to={"/user/"+user.id} className="shrink-1 grow-0 flex-auto p-2 rounded-md bg-gray-900 color-gray-400 cursor-pointer hover:bg-gray-700">
		<h3>{user.profile.name || "Unknown"}</h3>
	</NavLink>
}