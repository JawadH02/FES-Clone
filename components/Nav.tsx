import Image from 'next/image'
import useSidebar from '../hooks/useSidebar'
import { Burger } from '@mantine/core'
import { ModalAuth } from '../components/index'
import { useState } from 'react'

export const Nav = () => {
  const { handleSidebar, sidebar } = useSidebar()
  const [modal, setModal] = useState(false)
  const [loginBtn, setLoginBtn] = useState(false)

  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = (e.target as HTMLInputElement).value
    button !== 'SignUp' && setModal(!modal)

    if (button === 'Login' || button === 'SignUp') {
      setLoginBtn(true)
    } else {
      setLoginBtn(false)
    }
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
          value="Login"
          className="navBtn hidden bg-[#EDEDF0] text-[#242424] hover:bg-gray-200 sm:inline-flex"
          onClick={(e) => handleModal(e)}
        >
          Login
        </button>
        <button
          value="Register"
          className="navBtn inline-flex bg-[#7645d9] text-[#FFF] hover:opacity-60"
          onClick={(e) => handleModal(e)}
        >
          Register
        </button>
        <ModalAuth
          modal={modal}
          handleModal={handleModal}
          loginBtn={loginBtn}
        />
      </div>
    </nav>
  )
}
