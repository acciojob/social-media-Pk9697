import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function Post({ post = {}, incrementReaction }) {
	const { users } = useContext(UserContext)
	const { authorId } = post

	const author = users.find((user) => user.id == authorId)

	return (
		<div className='post'>
			<h2>{post.title}</h2>
			<p className='author'>by {author?.name}</p>
			<p>
				{post.content} {post.isEdited ? <span>edited</span> : ''}
			</p>
			<div className='reactions'>
				<button onClick={() => incrementReaction(post.id, 'thumbsUp')}>
					👍{post.reactions.thumbsUp}
				</button>
				<button onClick={() => incrementReaction(post.id, 'party')}>
					🎉{post.reactions.party}
				</button>
				<button onClick={() => incrementReaction(post.id, 'heart')}>
					❤️{post.reactions.heart}
				</button>
				<button onClick={() => incrementReaction(post.id, 'rocket')}>
					🚀{post.reactions.rocket}
				</button>
				<button onClick={() => incrementReaction(post.id, 'eyes')}>
					👀{post.reactions.eyes}
				</button>
			</div>
			<Link className='button' to={`/posts/${post.id}`}>
				View Post
			</Link>
		</div>
	)
}

export default Post
