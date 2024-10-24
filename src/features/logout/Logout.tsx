'use client'
import { logout } from '@/app/actions/logout'

export const Logout = () => {
	return (
		<>
			<button
				className="flex gap-[8px] items-center py-[24px]"
				onClick={ async () => logout() }
			>
				<i className="pi pi-sign-out" style={{ fontSize: '1.5rem', color: '#434FBA' }}></i>
				<span className="text-lg tracking-[0.2px] text-[#2A3039]">Выход</span>
			</button>
		</>
	)
}