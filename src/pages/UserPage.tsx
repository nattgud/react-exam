import type  {User } from "../types/User"
import { useParams } from "react-router-dom";
import { ShieldCheck, User as UserIcon, Moon, Mail, Vibrate, VibrateOff } from "lucide-react";
export default ({userlist}:{userlist:User[]}) => {
	if(!userlist) return <><p>Loading users...</p></>
	const { id } = useParams();
	console.log(id, userlist.filter(user => user.id == Number(id))[0]);
	const user:User = userlist.filter(user => user.id == Number(id))[0];
	return <>
		<h2 className="flex">
			{user.profile.name || "Unknown"}
			{user.roles.find((role:String) => role.toLowerCase() == "user") ? <UserIcon size="12" color="#6c6"></UserIcon> : ""}
			{user.roles.find((role:String) => role.toLowerCase() == "admin") ? <ShieldCheck size="12" color="#fd0"></ShieldCheck> : ""}
		</h2>
		<table>
			<tbody>
				<tr>
					<th>Settings</th>
					<td>{user.settings.theme == "dark" ? <Moon size="18"></Moon> : ""}</td>
					<td>{user.settings.notifications.email ? <Mail size="18"></Mail> : ""}</td>
					<td>{user.settings.notifications.push ? <Vibrate size="18"></Vibrate> : <VibrateOff size="18"></VibrateOff>}</td>
				</tr>
				<tr>
					<th>Address</th>
					<td>{user.profile.address.street}</td>
					<td colSpan={2}>{user.profile.address.zipCode}, {user.profile.address.city}</td>
				</tr>
			</tbody>
		</table>
	</>
}