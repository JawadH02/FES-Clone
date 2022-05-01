import { TextInput, PasswordInput } from '@mantine/core'
import { SubmitHandler, useForm } from 'react-hook-form'
import MuiModal from '@mui/material/Modal'
import { XIcon } from '@heroicons/react/outline'

interface Props {
  modal: boolean
  handleModal: () => void
}

interface Inputs {
  email: string
  password: string
}

export const ModalAuth = ({ modal, handleModal }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    console.log(email)
    console.log(password)
  }

  return (
    <MuiModal
      open={modal}
      onClose={handleModal}
      className={`relative !top-40 left-0 right-0 z-50 mx-auto w-full max-w-[825px] overflow-hidden overflow-y-scroll rounded-md md:px-4 lg:px-0 ${
        modal && '!h-screen overflow-hidden'
      }`}
    >
      <>
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#404F54] text-white hover:bg-[#2f2f2f] md:right-7 lg:right-5"
          onClick={handleModal}
        >
          <XIcon className="h-6 w-6" />
        </button>
        <div className="flex h-1/2 justify-between bg-white md:h-[600px]">
          <div className="w-full md:w-1/2">
            <div className="mx-auto max-w-[375px] space-y-3 p-9 md:mx-0">
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold">
                  Sign into your account
                </h1>
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
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
                  <button className="navBtn flex !w-full justify-center bg-[#7645d9] !py-2 text-sm font-semibold text-[#FFF] hover:opacity-60">
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
                    <button className="flex text-[12px] text-[#7645d9] underline">
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-[436px] md:flex">
            <figure className="absolute left-0 right-0 bottom-0 top-0">
              <img
                src="https://frontendsimplified.com/_nuxt/img/Login%20Design.8235d38.jpg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </>
      {/* Modal content */}
    </MuiModal>
  )
}
