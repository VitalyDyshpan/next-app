import Image from 'next/image'
import { AuthForm } from 'src/features/auth-form'

export default function  Page() {
	return (
		<main className="flex grow flex-col items-center pt-[10%]">
			<div className="flex flex-col gap-[24px] items-center max-w-[360px] w-full p-[20px]">
				<Image
					src="/images/logo.svg"
					alt="Picture of the author"
					width={143}
					height={68}
					priority
				/>
				<AuthForm />
			</div>
		</main>
	)
}