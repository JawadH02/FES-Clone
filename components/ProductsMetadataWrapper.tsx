import { useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'

interface Props {
  children: React.ReactNode
}

export const ProductsMetadataWrapper = ({ children }: Props) => {
  return (
    <>
      <li className={`flex w-full items-center space-x-4`}>
        <FaCheck className="text-sm text-[#FAC032]" />
        <h2 className="text-sm">{children}</h2>
      </li>
    </>
  )
}
