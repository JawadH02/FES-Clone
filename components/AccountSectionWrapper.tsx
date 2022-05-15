interface Props {
  children: React.ReactNode
  title: string
}

export const AccountSectionWrapper = ({ children, title }: Props) => {
  return (
    <div className="pt-6">
      <h2 className="font-bold">{title}</h2>
      <div className="space-y-1 pt-3">{children}</div>
    </div>
  )
}
