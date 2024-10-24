import { ShiftType } from 'src/entities/Shift/types'
import { fetchShifts } from 'src/entities/Shift/api'
import Link from 'next/link'
import { RButton } from 'src/shared/ui/common/Button/RButton'
import ShiftsList from 'src/entities/Shift/ui/ShiftsList'

export const UserShifts = async () => {
	const shiftsListData: ShiftType[] | null = await fetchShifts('master', ['open'])
	return (
		<>
			<div className="flex flex-col gap-6">
				<h1 className="text-title font-semibold">
					Смены
				</h1>
				<section
					className="flex flex-col gap-4"
				>
					<h2
						className="text-lg font-semibold"
					>
						Открытые смены
					</h2>
					<ShiftsList
						shiftList={ shiftsListData?.filter(shift => shift.status === 'open') || [] }
					/>
				</section>
				<section
					className="flex flex-col gap-4"
				>
					<h2
						className="text-lg font-semibold"
					>
						Открыто голосование
					</h2>
					<ShiftsList
						shiftList={ shiftsListData?.filter(shift => shift.status === 'vote') || [] }
						emptyListText="Нет смен с открытым голосованием"
					/>
				</section>
				<Link
					href="/shift/create"
					className="max-w-[320px] w-full self-center"
				>
					<RButton
						label="Создать смену"
					/>
				</Link>
			</div>
		</>
	)
}