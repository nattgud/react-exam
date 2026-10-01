import type  {User } from "../types/User"
import UserListUserCard from "../components/UserListUserCard"
export default ({userlist}:{userlist:User[]}) => {
	if(!userlist) return <><p>Loading users...</p></>
	return <>
		<h2 className="size-xl">Users</h2>
		<div className="flex gap-1 flex-wrap">
		{
			userlist.map((user:User, i:number) => <UserListUserCard key={i} user={user}></UserListUserCard>)
		}
		</div>
	</>
}