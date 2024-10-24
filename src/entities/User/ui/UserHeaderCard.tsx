import { UserType } from '../types'
import { IconUser } from 'src/shared/ui/icons'
import { useMemo } from 'react'

export const UserHeaderCard = ({ user }: { user: UserType }) => {
	const fullName = useMemo<string>(() => {
		return `${user.last_name} ${user.first_name} ${user.middle_name}`.trimEnd()
	}, [user])

	return (
		<>
			<div
				className={ 'flex gap-2' }
			>
				<IconUser
					className={ 'shrink-0' }
				/>
				<div>
					<p
						className={ 'text text-sm font-semibold tracking-[0.2px]' }
					>
						{ fullName }
					</p>
					<p
						className={ 'text-sm text-[#949DAF] tracking-[0.2px]' }
					>
						{ user.job }
					</p>
				</div>
			</div>
		</>
	)
}