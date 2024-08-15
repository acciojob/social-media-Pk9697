import React, { useContext } from 'react'
import { NotificationContext } from '../context/NotificationContext'
import { UserContext } from '../context/UserContext'

function Notifications() {
	const { notifications } = useContext(NotificationContext)
	const { users } = useContext(UserContext)

	const getAuthor = (id) => {
		return users.find((user) => user.id == id)
	}

	return (
		<section className='container notifications'>
			<h2>Notifications</h2>
			<section className='notificationsList'>
				<div>
					{notifications.map((notification) => (
						<div key={notification.id}>
							<strong>{getAuthor(notification.authorId).name}</strong>{' '}
							{notification.message}
						</div>
					))}
				</div>
			</section>
		</section>
	)
}

export default Notifications
