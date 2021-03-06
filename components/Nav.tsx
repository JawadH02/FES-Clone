import Image from 'next/image'
import useSidebar from '../hooks/useSidebar'
import { Burger } from '@mantine/core'
import { ModalWrapper } from '../components/index'
import React, { useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import toast, { Toaster } from 'react-hot-toast'
import useAuth from '../hooks/useAuth'
import Fade from '@mui/material/Fade'
import { BsFillPersonFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { FaCrown } from 'react-icons/fa'
import { SubscriptionModalContext } from '../context/SubscriptionModalContext/SubscriptionModalContext'
import { useSubscription } from '../hooks/useSubscription'
import Link from 'next/link'
import { useModal } from '../context/ModalContext/useModal'

export const Nav = () => {
  const { sidebar, handleSidebar } = useSidebar()
  const { user, logout } = useAuth()
  const [accountModal, setAccountModal] = useState(false)
  const { getComponentState, getModal, toggleSignUp, toggleSignIn } = useModal()
  const { handleSubscriptionModal, subscriptionModal, SubscriptionModalState } =
    useContext(SubscriptionModalContext)
  const subscription = useSubscription(user)

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
            <div className="flex items-center space-x-4">
              {!subscription && (
                <>
                  <button
                    className="mainBtn hidden items-center bg-[#7645d9] !px-5 text-white hover:opacity-70 md:flex"
                    onClick={handleSubscriptionModal}
                  >
                    Unlock Pro
                    <div>
                      <FaCrown className="ml-2 text-[#FEB63B]" />
                    </div>
                  </button>
                  <ModalWrapper
                    open={subscriptionModal}
                    type="SubscriptionModal"
                    img="/assets/subscription.png"
                  >
                    {SubscriptionModalState}
                  </ModalWrapper>
                </>
              )}
              <Avatar
                onClick={() => setAccountModal((prevState) => !prevState)}
                className="cursor-pointer"
                sx={{ bgcolor: '#7545D9' }}
              >
                {user.email?.charAt(0).toUpperCase()}
              </Avatar>
            </div>
            <div className={`opacity-0 ${accountModal ? 'opacity-100' : ''}`}>
              <Fade in={accountModal}>
                <div className="accountModal">
                  <Link href="/account">
                    <button className="accountButton">
                      <div className="accountModalSection group">
                        <BsFillPersonFill className="accountModalIcon" />
                        <div className="text-[16px]">Account</div>
                      </div>
                    </button>
                  </Link>
                  <button className="accountButton" onClick={handleLogout}>
                    <div className="accountModalSection group">
                      <FiLogOut className="accountModalIcon" />
                      <div className="text-[16px]">Logout</div>
                    </div>
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        )}
        <ModalWrapper
          open={getModal()}
          type="AuthModal"
          img="https://frontendsimplified.com/_nuxt/img/Login%20Design.8235d38.jpg"
        >
          {getComponentState()}
        </ModalWrapper>
      </div>
    </nav>
  )
}
