'use client'
import { SingleShiftType } from '../types'
import { TabPanel, TabView } from 'primereact/tabview'
import React, { Fragment } from 'react'
import RDescriptionItem from 'src/shared/ui/common/Description/RDescriptionItem'
import { getEmployeeFullName } from 'src/entities/Shift/lib'

interface ShiftTemplateProps {
	shift: SingleShiftType
	mainAction?: React.ReactNode
	outputAction?: React.ReactNode
}
export const ShiftTemplate = ({ shift, mainAction, outputAction }: ShiftTemplateProps) => {
	return (
		<>
			<div
				className="flex flex-col gap-6 justify-between"
			>
				<h2
					className="text-title font-semibold"
				>
					{ shift.title }
				</h2>
				<TabView>
					<TabPanel
						header="Данные смены"
					>
						<section
							className="flex flex-col gap-6"
						>
							<header
								className="flex gap-4 justify-between"
							>
								<h2 className="text-code font-semibold">
									Данные смены
								</h2>
								{ mainAction }
							</header>
							<div
								className="flex flex-col gap-[16px] p-[12px] bg-white rounded-[8px]"
							>
								<RDescriptionItem
									label="Участок"
									description={shift.department}
								/>
								<RDescriptionItem
									label="Тип смены"
									description={(shift.type === 'day' ? 'Дневная' : 'Ночная') || ''}
								/>
								<RDescriptionItem
									label="Плановая выработка"
									description={`${shift.outputs.productive[0].planned_output || ''} ${shift.outputs.productive[0].unit?.name || ''}`}
								/>
								<RDescriptionItem
									label="Сотрудники"
									description={<ol>
										{
											shift.employers.map((employer, index) => (
												<li
													key={employer.id || employer.email}
												>
													<span>{ `${index + 1}. ${employer.last_name || ''} ${employer.first_name || ''} ${employer.middle_name || ''}`.trimEnd() }</span>
												</li>
											))
										}
									</ol>}
								/>
							</div>
						</section>
					</TabPanel>
					<TabPanel
						header="Выработка"
					>
						<section
							className="flex flex-col gap-6"
						>
							<header
								className="flex gap-4 justify-between"
							>
								<h2
									className="text-code font-semibold"
								>
									Выработка за смену
								</h2>
								{ outputAction }
							</header>
							<div
								className="flex flex-col gap-4"
							>
								<h3
									className="text-lg font-semibold"
								>
									Плановая выработка
								</h3>
								{
									shift.outputs.productive.length ?
										<div
											className="flex flex-col gap-[16px] p-[12px] bg-white rounded-[8px]"
										>
											{
												shift.outputs.productive.map((productiveOutput) => (
													<Fragment
														key={productiveOutput.id}
													>
														<RDescriptionItem label="Единица измерения" description={productiveOutput.unit?.name || '-'} />
														<RDescriptionItem label="Плановая выработка" description={ productiveOutput.planned_output } />
														<RDescriptionItem label="Фактическая выработка" description={ productiveOutput.actual_output } />
														<RDescriptionItem label="Часы" description={ productiveOutput.actual_output_hours } />
													</Fragment>
												))
											}
										</div>
										: <span>Нет данных о выработке</span>
								}
							</div>
							<div
								className="flex flex-col gap-4"
							>
								<h3
									className="text-lg font-semibold"
								>
									Непроизводственные работы
								</h3>
								{
									shift.outputs.non_productive.length ?
										<div
											className="flex flex-col gap-[16px] p-[12px] bg-white rounded-[8px]"
										>
											{
												shift.outputs.non_productive.map((nonProductiveOutput) => (
													<Fragment
														key={nonProductiveOutput.id}
													>
														<RDescriptionItem label="Сотрудник" description={
															shift.employers.find(employee => employee.id === nonProductiveOutput.user_id) ?
																getEmployeeFullName(shift.employers.find(employee => employee.id === nonProductiveOutput.user_id)!)
																: 'unknown'
														} />
														<RDescriptionItem label="Тип работ" description={ nonProductiveOutput.type === 'non-productive' ? 'Непроизводственные работы' : 'Поломка' } />
														<RDescriptionItem label="Часы" description={ nonProductiveOutput.actual_output_hours } />
													</Fragment>
												))
											}
										</div>
										: <span>Непроизводственные работы отсутствуют</span>
								}
							</div>
						</section>
					</TabPanel>
				</TabView>
			</div>
		</>
	)
}