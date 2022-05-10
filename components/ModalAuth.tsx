interface ModalAuthProps {
  modal: boolean
  children: React.ReactNode
}

export const ModalAuth = (props: ModalAuthProps) => {
  const { modal, children } = props

  return <> {modal && children} </>
}