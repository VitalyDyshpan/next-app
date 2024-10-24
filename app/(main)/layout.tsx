import React from 'react'
import { AppHeader } from 'src/widgets/header'
import AppFooter from 'src/widgets/Footer/AppFooter'

export default async function AuthLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<AppHeader />
			<main className='grow py-8'>
				<div
					className={'max-w-[640px] px-[20px] w-full mx-auto h-full overflow-y-hidden'}
				>
					{ children }
				</div>
			</main>
			<AppFooter />
		</>
	)
}