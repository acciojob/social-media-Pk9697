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
		<div className='container notifications'>
			<h2>Notifications</h2>
			<section className='notificationsList'>
				{notifications.map((notification) => (
						<div key={notification.id}>
							<strong>{getAuthor(notification.authorId).name}</strong>{' '}
							{notification.message}
						</div>
				))}
			</section>
		</div>
	)
}

export default Notifications
