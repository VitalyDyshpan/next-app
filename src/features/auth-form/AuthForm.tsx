'use client'
import { RInput, RPasswordInput } from 'src/shared/ui/common/Input'
import { RSubmitButton } from 'src/shared/ui/common/Button/RSubmitButton'
import { login } from '@/app/actions'
import { useFormState } from 'react-dom'
import { RCheckbox } from 'src/shared/ui/common/Checkbox'
import styles from './AuthForm.module.scss'

type InitialState = {
	message: string
}
const AuthForm = () => {
	const initialState: InitialState = {
		message: '',
	}
	const [state, formAction] = useFormState<InitialState, FormData>(login, initialState)
	return (
		<>
			<form
				action={ formAction }
				className='w-full flex flex-col gap-[24px]'
				autoComplete={ 'off' }
			>
				<div
					className='relative flex flex-col gap-[24px]'
				>
					<RInput
						label="Логин"
						name="login"
						required={ true }
						type={ 'email' }
						className="w-full"
					/>
					<RPasswordInput
						placeholder="Введите пароль"
						feedback={ false }
						label="Пароль"
						name="password"
						required={ true }
						type={ 'password' }
						className="w-full"
					/>
					{
						state.message && <span className={styles.errorMessage}>{state.message}</span>
					}
				</div>
				<RCheckbox
					label="Запомнить меня"
					name="remember"
				/>
				<RSubmitButton
					label="Войти"
				/>
			</form>
		</>
	)
}

export default AuthForm