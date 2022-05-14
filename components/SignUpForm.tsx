import { TextInput, PasswordInput } from '@mantine/core'
import React, { useCallback, useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginForm, Loader } from '../components/index'
import { ModalContext } from '../context/ModalContext/ModalContext'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
  name?: string
}

export const SignUpForm = () => {
  const [registerUser, setRegisterUser] = useState(false)
  const { componentState, setComponentState, setModal } =
    useContext(ModalContext)
  const { signUp, error, loading } = useAuth()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onRegisterSubmit: SubmitHandler<Inputs> = async ({
    name,
    email,
    password,
  }) => {
    if (registerUser) await signUp(email, password)

    reset()
    if (!error) {
      setModal((prevState) => !prevState)
    }
  }

  const handleSignupClick = useCallback(() => {
    setComponentState(<LoginForm />)
  }, [componentState])

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Create your account</h1>
      <h3 className="text-sm text-gray-600">
        We'll have you coding in no time.
      </h3>
      <form className="space-y-3" onSubmit={handleSubmit(onRegisterSubmit)}>
        <TextInput
          label="Name"
          placeholder="Jane Doe"
          {...register('name', { required: true })}
        />

        <div className="space-y-1">
          <label className="text-[14px]">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="jane@example.com"
            className="input"
          />
        </div>

        <PasswordInput
          label="Password"
          {...register('password', { required: true })}
          placeholder="********"
        />
        {error && (
          <p className="p-1 text-[13px] font-light text-orange-500">{error}</p>
        )}

        <button
          className="mainBtn flex !w-full justify-center bg-[#7645d9] !py-2 text-sm font-semibold text-[#FFF] hover:opacity-60"
          onClick={() => setRegisterUser(true)}
        >
          {loading ? <Loader color="dark:fill-white" /> : 'Get Started!'}
        </button>
      </form>
      <div className="space-y-2">
        <div>
          <p className="flex text-[12px] text-[#56595D]">
            By signing up, you agree to Frontend Simplified's Terms of Use and
            Privacy Policy.
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <h4 className="underlin flex text-[12px] text-[#56595D]">
            Already signed up?
          </h4>
          <button
            className="flex text-[12px] text-[#7645d9] underline"
            onClick={handleSignupClick}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
