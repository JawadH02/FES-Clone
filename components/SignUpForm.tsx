import { TextInput, PasswordInput } from '@mantine/core'
import React, { useCallback, useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginForm } from '../components/index'
import { ModalContext } from './Nav'

interface Inputs {
  email: string
  password: string
  name?: string
}

export const SignUpForm = () => {
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

  const handleSignupClick = useCallback(() => {
    setComponentState(<LoginForm />)
  }, [componentState])

  return (
    <div className='space-y-2'>
      <h1 className="text-2xl font-semibold">Create your account</h1>
      <h3 className="text-sm text-gray-600">
        We'll have you coding in no time.
      </h3>
      <form className="space-y-3" onSubmit={handleSubmit(onRegisterSubmit)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...register('name', { required: true })}
        />
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
          Get Started!
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
