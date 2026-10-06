import type  {User } from "../types/User"
import { useParams } from "react-router-dom";

import { ShieldCheck, User as UserIcon, Moon, Mail, Vibrate, VibrateOff } from "lucide-react";

export default ({userlist}:{userlist:User[]}) => {
	if(!userlist) return <><p>Loading user...</p></>
	
	const { id } = useParams();
	const user:User = userlist.filter(user => user.id === Number(id))[0];

	return <>
		<h2 className="flex">
			{user.profile.name || "Unknown"}
			<span className="group">{user.roles.find((role:String) => role.toLowerCase() == "user") ? <UserIcon size="12" color="#6c6"></UserIcon> : ""}
				<div className="pointer-events-none opacity-0 transition group-hover:opacity-100 absolute bg-gray-900 border border-gray-500 rounded-md p-1 text-xs">User</div>
			</span>
			<span className="group">{user.roles.find((role:String) => role.toLowerCase() == "admin") ? <ShieldCheck size="12" color="#fd0"></ShieldCheck> : ""}
				<div className="pointer-events-none opacity-0 transition group-hover:opacity-100 absolute bg-gray-900 border border-gray-500 rounded-md p-1 text-xs">Administrator</div>
			</span>
		</h2>
		<table>
			<tbody>
				<tr>
					<th>Username</th>
					<td colSpan={2}>{user.username}</td>
				</tr>
				<tr>
					<th>Email</th>
					<td colSpan={2}>{user.profile.email}</td>
				</tr>
				<tr>
					<th>Address</th>
					<td>{user.profile.address.street}</td>
					<td>{user.profile.address.zipCode}, {user.profile.address.city}</td>
				</tr>
				<tr>
					<th>Settings</th>
					<td colSpan={2}>
						<div className="flex">
							<span className="group">{user.settings.theme == "dark" ? <Moon size="18"></Moon> : ""}
								<div className="pointer-events-none opacity-0 transition group-hover:opacity-100 absolute bg-gray-900 border border-gray-500 rounded-md p-1 text-xs">Theme</div>
							</span>
							<span className="group">{user.settings.notifications.email ? <Mail size="18"></Mail> : ""}
								<div className="pointer-events-none opacity-0 transition group-hover:opacity-100 absolute bg-gray-900 border border-gray-500 rounded-md p-1 text-xs">Email notifications</div>
							</span>
							<span className="group">{user.settings.notifications.push ? <Vibrate size="18"></Vibrate> : <VibrateOff size="18"></VibrateOff>}
								<div className="pointer-events-none opacity-0 transition group-hover:opacity-100 absolute bg-gray-900 border border-gray-500 rounded-md p-1 text-xs">Push notifications</div>
							</span>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</>
}