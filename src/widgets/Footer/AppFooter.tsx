'use client'
import React from 'react'
import RMenu from 'src/shared/ui/components/Menu/RMenu'
import RMenuItem from 'src/shared/ui/components/Menu/RMenuItem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logout } from 'src/features/logout/Logout'

const AppFooter = () => {
	const pathname = usePathname()
	return (
		<footer
			className="pb-4"
		>
			<div
				className={'max-w-80 w-full mx-auto py-[16px] px-[17px] bg-white rounded-[14px] relative z-[100]'}
			>
				<nav className="flex gap-[24px] justify-between">
					<RMenu>
						<nav
							className="flex flex-col w-full max-w-[600px]"
						>
							<Link
								href="/profile"
							>
								<RMenuItem
									icon={<i className="pi pi-user" style={{ fontSize: '1.5rem', color: '#434FBA' }}></i>}
									slot={<span>Аккаунт</span>}
								/>
							</Link>
							<Link
								href="/shifts/history"
							>
								<RMenuItem
									icon={<i className="pi pi-file-check" style={{ fontSize: '1.5rem', color: '#434FBA' }}></i>}
									slot={<span>История смен</span>}
								/>
							</Link>
							<Logout />
						</nav>
					</RMenu>
					<Link
						className={'flex flex-col gap-[6px] items-center text-[11px] leading-[13px] w-[74px] ' + (pathname === '/' ? 'text-[#434FBA] active' : '')}
						href="/"
					>
						<i className="pi pi-home" style={{ fontSize: '1.5rem', color: pathname === '/' ? '#434FBA' : '#161F2F' }}></i>
						Главная
					</Link>
					<Link
						className={'flex flex-col gap-[6px] items-center text-[11px] leading-[13px] w-[74px] ' + (pathname === '/support' ? 'text-[#434FBA] active' : '')}
						href={'/support'}
					>
						<i className="pi pi-list-check" style={{ fontSize: '1.5rem', color: pathname === '/support' ? '#434FBA' : '#161F2F' }}></i>
						Поддержка
					</Link>
				</nav>
			</div>
		</footer>
	)
}

export default AppFooter