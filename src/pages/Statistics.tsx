import type  {User } from "../types/User"

export default ({userlist}:{userlist:User[]}) => {
	if(!userlist) return <><p>Loading users...</p></>
	
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