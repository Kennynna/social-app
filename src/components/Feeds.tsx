import { prisma } from '@/app/prisma'
import { Post } from './Post'
import { Button } from './ui/button'

export const Feeds = async () => {
	const posts = await prisma.post.findMany()

	return (
		<div className='flex gap-5 flex-col'>
			<Button variant='outline' >
				Create Post
			</Button>
			{posts.map(post => (
				<div key={post.id}>
					<Post desc={post.desc}/>
				</div>
			))}
		</div>
	)
}
