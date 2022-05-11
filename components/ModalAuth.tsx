interface ModalAuthProps {
  open: boolean
  children: React.ReactNode
}

export const ModalAuth = (props: ModalAuthProps) => {
  const { open, children } = props

  return <> {open && children} </>
}