'use client'
import React, { ReactElement, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './RMenu.scss'

const RMenu = ({ children }: { children?: React.ReactNode }): ReactElement => {
	const [isOpen, setIsOpen] = useState(false)
	const nodeRef = useRef(null)
	return (
		<>
			<button
				className={ 'flex flex-col gap-[6px] items-center text-[11px] leading-[13px] trigger-button w-[74px] ' + (isOpen ? 'text-[#434FBA]' : '') }
				onClick={ () => setIsOpen(!isOpen) }
			>
				<i
					className={'pi ' + (isOpen ? 'pi-times' : 'pi-bars')}
					style={{ fontSize: '1.5rem' }}
				></i>
				Меню
			</button>
			{createPortal(
				<CSSTransition
					in={ isOpen }
					nodeRef={ nodeRef }
					timeout={ 300 }
					classNames="menu"
					unmountOnExit={true}
				>
					<div
						className="w-screen h-screen absolute bottom-0 bg-white flex items-center justify-center px-[20px] z-50 menu-wrap overflow-hidden"
						ref={ nodeRef }
					>
						{ children }
					</div>
				</CSSTransition>,
				document.body
			)}
		</>
	)
}

export default RMenu