import { TextInput, PasswordInput } from '@mantine/core'
import { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useModal } from '../context/ModalContext/useModal'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
  name?: string
}

export const LoginForm = () => {
  const { signIn, loading, error } = useAuth()
  const [login, setLogin] = useState(false)
  const { toggleModal, toggleSignUpComponentState } = useModal()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSignInSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) await signIn(email, password)
    toggleModal()
    reset()
    if (error) {
      toggleModal()
    }
  }

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Sign into your account</h1>
      <form className="space-y-3" onSubmit={handleSubmit(onSignInSubmit)}>
        <TextInput
          label="Email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        <PasswordInput
          label="Password"
          {...register('password', { required: true })}
          placeholder="********"
        />
        {error && (
          <p className="p-1 text-[13px] font-light text-orange-500">{error}</p>
        )}
        <button
          // disabled={loading}
          className="mainBtn flex !w-full justify-center bg-[#7645d9] !py-2 text-sm font-semibold text-[#FFF] hover:opacity-60"
          onClick={() => setLogin(true)}
        >
          {'Sign in'}
        </button>
      </form>
      <div className="space-y-2">
        <div>
          <button className="flex cursor-not-allowed text-[12px] text-[#56595D] underline">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center space-x-1">
          <h4 className="underlin flex text-[12px] text-[#56595D]">
            New here?
          </h4>
          <button
            className="flex text-[12px] text-[#7645d9] underline"
            onClick={toggleSignUpComponentState}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
