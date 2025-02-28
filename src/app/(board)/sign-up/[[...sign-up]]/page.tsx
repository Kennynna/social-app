import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
	return (
		<div className='flex w-screen h-screen justify-center items-center bg-zinc-900'>
			<SignUp />
		</div>
	)
}
