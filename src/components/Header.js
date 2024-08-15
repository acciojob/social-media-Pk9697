import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<div className='header container App'>
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
				<button className='button'>Refresh Notifications</button>
			</section>
		</div>
	)
}

export default Header
