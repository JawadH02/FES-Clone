import ReactPlayer from 'react-player/lazy'
import { FaDiscord, FaAngleRight, FaLock } from 'react-icons/fa'
import Link from 'next/link'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router'
import { useSubscription } from '../../hooks/useSubscription'
import { useModal } from '../../context/ModalContext/useModal'

interface Props {
  title: string
  description: string
  freeVideo: boolean
  nextLesson: string
}

export const Display = ({
  title,
  description,
  freeVideo,
  nextLesson,
}: Props) => {
  const { user } = useAuth()
  const { toggleSignUp, toggleSignIn } = useModal()
  const subscription = useSubscription(user)
  const router = useRouter()

  return (
    <div className="mx-auto mb-4 flex w-full max-w-[1200px] flex-col">
      <div className="rounded-sm xl:mt-8">
        <div className="relative bg-black p-5 pt-[56.25%]">
          {freeVideo ? (
            <ReactPlayer
              url="https://youtu.be/mLRbZJS5A_E"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: '0', left: '0' }}
              controls
              stopOnUnmount
            />
          ) : (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <div className="flex flex-col items-center space-y-2">
                {!user && (
                  <div className="space-y-3">
                    <div className="flex flex-col items-center space-y-3">
                      <FaLock className="text-4xl" />
                      <h1 className="text-2xl font-bold">Unlock this video</h1>
                    </div>
                    <h3>Log into your account to watch this video!</h3>
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        className="mainBtn bg-[#3D3D3D] !px-6 !py-2 hover:opacity-60"
                        onClick={toggleSignIn}
                      >
                        Login
                      </button>
                      <button
                        className="mainBtn bg-white !px-6 !py-2 text-black hover:opacity-60"
                        onClick={toggleSignUp}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                )}
                {user && !subscription && (
                  <div className="flex flex-col items-center space-y-2">
                    <FaLock className="text-4xl" />
                    <h1 className="text-2xl font-bold">Unlock this video</h1>
                    <h3>Become a Pro to watch this video!</h3>
                  </div>
                )}
              </div>
            </div>
          )}
          {subscription && (
            <ReactPlayer
              url="https://youtu.be/mLRbZJS5A_E"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: '0', left: '0' }}
              controls
              stopOnUnmount
            />
          )}
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
              className="mainBtn py-1.8 inline-flex bg-[#EDEDF0] px-6 text-sm font-bold text-[#242424] hover:bg-gray-200"
              onClick={toggleSignUp}
            >
              Mark Complete
            </button>
          ) : (
            <button className="mainBtn py-1.8 inline-flex bg-[#EDEDF0] px-6 text-sm font-bold text-[#242424] hover:bg-gray-200">
              Mark Complete
            </button>
          )}
          <button
            className="mainBtn py-1.8 inline-flex bg-[#7645d9] px-6 text-sm font-bold text-[#FFF] hover:opacity-60"
            onClick={() => router.push(nextLesson)}
          >
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
