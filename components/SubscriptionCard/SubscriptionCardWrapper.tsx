interface SubscriptionCardWrapperProps {
  children: React.ReactNode
  title: string
  billed: string
  img: string
  selected: boolean
}

export const SubscriptionCardWrapper = ({
  children,
  title,
  billed,
  img,
  selected,
}: SubscriptionCardWrapperProps) => {
  let showCardTopBanner = false
  if (selected && title !== '') {
    showCardTopBanner = true
  }

  return (
    <>
      <div
        className={`h-[30px] w-[224px] rounded-t-3xl ${
          showCardTopBanner ? 'bg-[#896DE7]' : 'opacity-0'
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
