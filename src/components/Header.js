import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
	const navigate=useNavigate()
	return (
		<header className='header container App'>
			<h1>GenZ</h1>
			<section>
				<ul>
					<li>
						<Link to='/'>Posts</Link>
					</li>
					<li>
						<Link to='/users'>Users</Link>
					</li>
					<li>
						<Link to='/notifications'>Notifications</Link>
					</li>
				</ul>
				<button className='button' onClick={() => navigate('/notifications')}>Refresh Notifications</button>
			</section>
		</header>
	)
}

export default Header
