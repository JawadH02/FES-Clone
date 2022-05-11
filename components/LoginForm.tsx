import { TextInput, PasswordInput } from '@mantine/core'
import React, { useCallback, useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignUpForm } from '../components/SignUpForm'
import { ModalContext } from './Nav'

interface Inputs {
  email: string
  password: string
  name?: string
}

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>()
  const { componentState, setComponentState } = useContext(ModalContext)

  const onSignInSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    // console.log(email)
    // console.log(password)
  }

  const onRegisterSubmit: SubmitHandler<Inputs> = ({
    name,
    email,
    password,
  }) => {
    // console.log(name)
    // console.log(email)
    // console.log(password)
  }

  const handleLoginClick = useCallback(() => {
    setComponentState(<SignUpForm />)
  }, [componentState])

  return (
    <div className='space-y-2'>
      <h1 className="text-2xl font-semibold">Sign into your account</h1>
      <form className="space-y-3" onSubmit={handleSubmit(onSignInSubmit)}>
        <TextInput
          label="Email"
          {...register('email', { required: true })}
          placeholder="your@email.com"
        />
        <PasswordInput
          label="Password"
          {...register('password', { required: true })}
          placeholder="Password"
        />
        <button className="navBtn flex !w-full cursor-not-allowed justify-center bg-[#7645d9] !py-2 text-sm font-semibold text-[#FFF] hover:opacity-60">
          Sign In
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
            onClick={handleLoginClick}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}
