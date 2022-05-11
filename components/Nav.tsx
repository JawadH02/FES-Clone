import Image from 'next/image'
import useSidebar from '../hooks/useSidebar'
import { Burger } from '@mantine/core'
import { ModalAuth, LoginForm, SignUpForm } from '../components/index'
import { useContext, useState } from 'react'

import MuiModal from '@mui/material/Modal'
import { XIcon } from '@heroicons/react/outline'
import { createContext } from 'react'

interface ModalContextProps {
  componentState: React.ReactNode
  setComponentState: React.Dispatch<React.SetStateAction<React.ReactNode>>
}

export const ModalContext = createContext<ModalContextProps>({
  componentState: null,
  setComponentState: () => {},
})

export const Nav = () => {
  const [modal, setModal] = useState(false)
  const { sidebar, handleSidebar } = useSidebar()
  const { componentState, setComponentState } = useContext(ModalContext)

  const toggleSignUp = () => {
    setModal((prevState) => !prevState)
    setComponentState(<SignUpForm />)
  }

  const toggleSignIn = () => {
    setModal((prevState) => !prevState)
    setComponentState(<LoginForm />)
  }

  return (
    <nav className="border-b bg-[#FAF9FA]">
      {/* left */}
      <div className="flex items-center space-x-2 sm:space-x-6">
        <Burger
          className="mb-1 h-6 cursor-pointer font-bold transition duration-300 hover:opacity-60"
          opened={sidebar}
          size={18}
          color="#7645d9"
          onClick={handleSidebar}
        />
        <figure>
          <Image src="/assets/fes.png" width={240} height={32} alt="Logo" />
        </figure>
      </div>
      {/* right */}
      <div className="flex items-center space-x-3 text-sm">
        <button
          className="navBtn hidden bg-[#EDEDF0] text-[#242424] hover:bg-gray-200 sm:inline-flex"
          onClick={toggleSignIn}
        >
          Login
        </button>
        <button
          className="navBtn inline-flex bg-[#7645d9] text-[#FFF] hover:opacity-60"
          onClick={toggleSignUp}
        >
          Register
        </button>
        <ModalAuth modal={modal}>
          <MuiModal
            open={modal}
            onClose={(event: {}, reason: 'backdropClick') => !reason}
            className={`relative !top-40 left-0 right-0 z-50 mx-auto w-full max-w-[825px] overflow-hidden overflow-y-scroll rounded-md md:px-4 lg:px-0 ${
              modal && '!h-screen overflow-hidden'
            }`}
          >
            <>
              <button
                className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#404F54] text-white hover:bg-[#2f2f2f] md:right-7 lg:right-5"
                onClick={() => setModal((prevState) => !prevState)}
              >
                <XIcon className="h-6 w-6" />
              </button>
              <div className="flex h-1/2 justify-between bg-white md:h-[600px]">
                <div className="w-full md:w-1/2">
                  <div className="mx-auto max-w-[375px] space-y-3 p-9 md:mx-0">
                    <div className="space-y-3">{componentState}</div>
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
          </MuiModal>
        </ModalAuth>
      </div>
    </nav>
  )
}
