interface SubscriptionCardWrapperProps {
  children: React.ReactNode
  title: string
  billed: string
  img: string
}

export const SubscriptionCardWrapper = ({
  children,
  title,
  billed,
  img,
}: SubscriptionCardWrapperProps) => {
  return (
    <>
      <div
        className={`h-[30px] w-full rounded-t-3xl ${
          title !== '' ? 'bg-[#896DE7]' : ''
        }`}
      >
        <h1 className="font-semibold text-white">{title}</h1>
      </div>
      <figure>
        <img src={img} alt="" className="h-16" />
      </figure>
      {children}
      <h3 className="text-sm">Billed {billed}</h3>
    </>
  )
}
