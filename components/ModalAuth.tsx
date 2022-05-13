import MuiModal from '@mui/material/Modal'
import { XIcon } from '@heroicons/react/outline'
import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext/ModalContext'
import { SubscriptionModalContext } from '../context/SubscriptionModalContext/SubscriptionModalContext'
import { Fade } from '@mui/material'

interface ModalAuthProps {
  open: boolean
  type: string
  children: React.ReactNode
  img: string
}

export const ModalAuth = (props: ModalAuthProps) => {
  const { open, type, children, img } = props
  const { setModal } = useContext(ModalContext)
  const { setSubscriptionModal } = useContext(SubscriptionModalContext)

  const handleClone = () => {
    type === 'SubscriptionModal'
      ? setSubscriptionModal((prevState) => !prevState)
      : setModal((prevState) => !prevState)
  }

  return (
    <>
      <MuiModal
        open={open}
        onClose={(_, reason: 'backdropClick') => !reason}
        className={`relative ${
          type === 'SubscriptionModal' ? '!top-20' : '!top-40'
        } left-0 right-0 z-50 mx-auto ${
          type === 'SubscriptionModal' ? 'max-w-[904px]' : 'max-w-[768px]'
        } overflow-hidden overflow-y-scroll rounded-md ${
          open && '!h-screen overflow-hidden'
        }`}
      >
        <Fade in={open}>
          <div
            className={`${
              type === 'SubscriptionModal' ? 'h-[783px]' : 'h-[592px]'
            }`}
          >
            <button
              className="modalButton absolute right-5 top-5 !z-50 h-9 w-9 border-none bg-[#404F54] text-white hover:bg-[#2f2f2f] md:right-7 lg:right-5"
              onClick={handleClone}
            >
              <XIcon className="h-6 w-6" />
            </button>
            <div className={`flex h-full justify-between bg-white`}>
              <div className="w-full md:w-1/2">
                <div
                  className={` mx-auto ${
                    type === 'SubscriptionModal' ? 'max-w-1/2' : 'max-w-[384px]'
                  } space-y-3 pt-8 md:mx-0 md:p-8`}
                >
                  <div className="space-y-3">{open && children}</div>
                </div>
              </div>
              <div className={`relative hidden w-1/2 overflow-hidden md:flex`}>
                <figure className="absolute left-0 right-0 top-0 bottom-0">
                  <img src={img} alt="" className="h-full w-full" />
                </figure>
              </div>
            </div>
          </div>
        </Fade>
      </MuiModal>
    </>
  )
}
