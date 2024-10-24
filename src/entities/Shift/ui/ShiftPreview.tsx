import type { ShiftType } from '../types'
import { HTMLAttributes } from 'react'

export const ShiftPreview = ({ shift, ...props }: { shift: ShiftType } & HTMLAttributes<HTMLDivElement>) => {
	return (
		<>
			<div
				{ ...props }
				className="py-[16px] transition-all px-[20px] rounded-[8px] bg-white active:bg-[#EBEBF1] hover:shadow-[0_0_12px_rgba(0,0,0,0.06)] flex flex-col gap-[8px]"
			>
				<p className="text-sm text-[#949DAF] tracking-[0.2px] font-semibold">
					{ shift.department } { shift.type ? shift.type === 'day' ? 'Дневная' : 'Ночная' : '' }
				</p>
				<p className="text-lg text-[#2A3039]">
					{ shift.title }
				</p>
			</div>
		</>
	)
}