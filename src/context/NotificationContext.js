import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

const NotificationContext = createContext(null)

function NotificationContextProvider({ children }) {
    const [notifications, setNotifications] = useState([{
        id: 1,
        message: 'Hello World',
        authorId: 1,
    }])

	const addNotification = (notification) => {
		setNotifications((prev) => [
			{
				...notification,
				id: uuid(),
			},
			...prev,
		])
	}

	return (
		<NotificationContext.Provider value={{ notifications, addNotification }}>
			{children}
		</NotificationContext.Provider>
	)
}

export { NotificationContext, NotificationContextProvider }
