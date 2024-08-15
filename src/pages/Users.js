import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function Users() {
	const { users } = useContext(UserContext)

	return (
		<div className='container users'>
			<h2>Users</h2>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<Link to={`/users/${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
