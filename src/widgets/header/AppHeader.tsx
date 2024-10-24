import Image from 'next/image'
import smallLogo from '../../../public/images/small-logo.svg'
import { fetchUser, UserHeaderCard } from 'src/entities/User'

export const AppHeader = async () => {
	const userData = await fetchUser()
	return (
		<>
			<header
				className="px-5 pt-4 pb-2 bg-white rounded-b-lg shadow-[0_4px_24px_0_rgba(20,24,39,0.06)]"
			>
				<div
					className="max-w-[600px] w-full flex flex-col gap-4 mx-auto"
				>
					<div
						className="flex gap-4 justify-between"
					>
						<Image
							src={smallLogo}
							alt={'small-logo'}
						/>
					</div>
					<UserHeaderCard
						user={userData!}
					/>
				</div>
			</header>
		</>
	)
}