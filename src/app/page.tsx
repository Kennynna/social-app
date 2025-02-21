import { prisma } from '../../prisma'

const Homepage = async () => {
	const users = await prisma.user.findMany()
	console.log(users)

	return (
		<div className=''>
			<p>{users.map(user => user.username)}</p>
		</div>
	)
}

export default Homepage
