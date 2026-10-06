import { NavLink } from "react-router-dom";
import { MousePointerClick } from "lucide-react";

import type { User } from "../types/User"

import { ShieldCheck } from "lucide-react";

export default ({user}:{user:User}) => {
	return <NavLink to={"/user/"+user.id} className="group shrink grow-0 flex-auto p-2 rounded-md bg-gray-900 color-gray-400 cursor-pointer hover:bg-gray-700">
		<span className="flex">{user.profile.name || "Unknown"} {user.roles.find(role => role === "admin") ? <ShieldCheck size={14}></ShieldCheck>:""}</span>
			<div className="pointer-events-none opacity-0 transition group-hover:opacity-100 absolute bg-gray-900 border border-gray-500 rounded-md p-1 text-xs flex gap-2">
				<MousePointerClick size={14}></MousePointerClick>See more about <em>{user.username}</em>
			</div>
	</NavLink>
}