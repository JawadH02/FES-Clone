import Image from 'next/image'
import useSidebar from '../hooks/useSidebar'
import { Burger } from '@mantine/core'
import { ModalAuth } from '../components/index'
import { useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import toast, { Toaster } from 'react-hot-toast'

import MuiModal from '@mui/material/Modal'
import { XIcon } from '@heroicons/react/outline'
import { ModalContext } from '../context/ModalContext'
import useAuth from '../hooks/useAuth'
import Fade from '@mui/material/Fade'
import { BsFillPersonFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'

export const Nav = () => {
  const { sidebar, handleSidebar } = useSidebar()
  const { user, logout } = useAuth()
  const [accountModal, setAccountModal] = useState(false)
  const {
    componentState,
    modal,
    setModal,
    toggleSignUp,
    toggleSignIn,
  } = useContext(ModalContext)

  const handleLogout = () => {
    logout()
    toast.success('You have successfully logged out', { duration: 1500 })
    setAccountModal((prevState) => !prevState)
  }

  return (
    <nav className="border-b bg-[#FAF9FA]">
      {/* left */}
      <Toaster position="top-right" />
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
        {!user ? (
          <>
            <button
              className="mainBtn hidden bg-[#EDEDF0] text-[#242424] hover:bg-gray-200 sm:inline-flex"
              onClick={toggleSignIn}
            >
              Login
            </button>
            <button
              className="mainBtn inline-flex bg-[#7645d9] text-[#FFF] hover:opacity-60"
              onClick={toggleSignUp}
            >
              Register
            </button>
          </>
        ) : (
          <div>
            <Avatar
              onClick={() => setAccountModal((prevState) => !prevState)}
              className="cursor-pointer"
              sx={{ bgcolor: '#7545D9' }}
            >
              {user.email?.charAt(0)}
            </Avatar>
            <ModalAuth open={accountModal}>
              <div className={`opacity-0 ${accountModal ? 'opacity-100' : ''}`}>
                <Fade in={accountModal}>
                  <div className="accountModal">
                    <button className="accountButton">
                      <div className="accountModalSection group">
                        <BsFillPersonFill className="accountModalIcon" />
                        <div className="text-[16px]">Account</div>
                      </div>
                    </button>
                    <button className="accountButton" onClick={handleLogout}>
                      <div className="accountModalSection group">
                        <FiLogOut className="accountModalIcon" />
                        <div className="text-[16px]">Logout</div>
                      </div>
                    </button>
                  </div>
                </Fade>
              </div>
            </ModalAuth>
          </div>
        )}
        <ModalAuth open={modal}>
          <MuiModal
            open={modal}
            onClose={(_, reason: 'backdropClick') => !reason}
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
