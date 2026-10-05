import { NavLink } from "react-router-dom";
type Props = {
	isLoading: boolean
}
function Nav(props:Props) {
  return <>
		<NavLink to="/" className={({isActive}) => `transition hover:text-amber-50 ${isActive?"text-amber-300":""}`}>Home</NavLink>
		{
		!props.isLoading?
			<>
				<NavLink to="/users" className={({isActive}) => `transition hover:text-amber-50 ${isActive?"text-amber-300":""}`}>Users</NavLink>
				<NavLink to="/stats" className={({isActive}) => `transition hover:text-amber-50 ${isActive?"text-amber-300":""}`}>Statistics</NavLink>
			</>
			:
			<span className="text-gray-800">Loading userlist...</span>
		}
  </>;
}

export default Nav;