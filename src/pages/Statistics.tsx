import type  {User } from "../types/User"
import UserListUserCard from "../components/UserListUserCard"
export default ({userlist}:{userlist:User[]}) => {
	if(!userlist) return <><p>Loading users...</p></>
	console.log(userlist);
	return <>
		<table>
			<tbody className="statTable">
				<tr>
					<th>Total number of users</th>
					<td>{userlist.length}</td>
				</tr>
				<tr>
					<th>Number of admins</th>
					<td>{userlist.filter((user:User) => user.roles.find(role => role === "admin")).length}</td>
				</tr>
				<tr>
					<th>Users with darkmode</th>
					<td>{userlist.filter((user:User) => user.settings.theme === "dark").length}</td>
				</tr>
				<tr>
					<th>Users with email notifications</th>
					<td>{userlist.filter((user:User) => user.settings.notifications.email).length}</td>
				</tr>
				<tr>
					<th>Users with push notifications</th>
					<td>{userlist.filter((user:User) => user.settings.notifications.push).length}</td>
				</tr>
			</tbody>
		</table>
	</>
}