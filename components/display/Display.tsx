import ReactPlayer from 'react-player/lazy'
import { FaDiscord, FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import { sidebarData } from '../sidebar/sidebarData'

interface Props {
  title: string
  description: string
}

export const Display = ({ title, description }: Props) => {
  const { user } = useAuth()
  const { toggleSignUp } = useContext(ModalContext)
  const router = useRouter()

  return (
    <div className="mx-auto mb-4 flex w-full max-w-[1200px] flex-col">
      <div className="rounded-sm xl:mt-8">
        <div className="relative bg-black p-5 pt-[56.25%]">
          <ReactPlayer
            url="https://youtu.be/mLRbZJS5A_E"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            controls
            stopOnUnmount
          />
        </div>
      </div>
      <div className="mx-4 mt-2 space-y-5 2xl:mx-0">
        <h1 className="text-[40px] font-bold text-[#7645d9]">{title}</h1>
        <hr className="border-gray-200" />
        <div className="mt-5 space-y-4 text-lg">
          <p className="whitespace-pre-line">{description}</p>
        </div>
        <hr className="border-gray-200" />
        <div>
          <Link href="https://discord.gg/5jf7Bn9z">
            <a target="_blank">
              <div className="group flex max-w-[460px] items-center space-x-4 p-4 transition-all duration-300 hover:bg-gray-100">
                <div className="block max-w-[70px] space-y-3 rounded-sm p-6 ring-1 ring-gray-300">
                  <FaDiscord className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h1 className="text-blue-600">Discord Community</h1>
                  <p className="text-sm text-gray-600">
                    Network in our community of over 25,00 people, including
                    engineers working at top tech companies.
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <hr className="border-gray-200" />
        <div className="flex items-center justify-between">
          {!user ? (
            <button
              className="navBtn py-1.8 inline-flex bg-[#EDEDF0] px-6 text-sm font-bold text-[#242424] hover:bg-gray-200"
              onClick={toggleSignUp}
            >
              Mark Complete
            </button>
          ) : (
            <button className="navBtn py-1.8 inline-flex bg-[#EDEDF0] px-6 text-sm font-bold text-[#242424] hover:bg-gray-200">
              Mark Complete
            </button>
          )}
          <button className="navBtn py-1.8 inline-flex bg-[#7645d9] px-6 text-sm font-bold text-[#FFF] hover:opacity-60">
            <div className="flex items-center">
              Next Lesson
              <FaAngleRight className="text-lg font-bold" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
