import { CustomButtom } from '@/components/custom-buttom'
import { prisma } from './../prisma'
import { Feeds } from '@/components/Feeds'

const Homepage = async () => {
	const users = await prisma.user.findMany()
	console.log(users)

	return (
		<div className=''>
			<p>{users ? users?.map(user => user.username) : ''}</p>
			<Feeds />
		</div>
	)
}

export default Homepage
