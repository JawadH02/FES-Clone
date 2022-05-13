interface SubscriptionCardTextProps {
  children: React.ReactNode
  type: string
}

export const SubscriptionCardTextWrapper = ({
  children,
  type,
}: SubscriptionCardTextProps) => {
  return (
    <div className="space-y-4">
      <div className="py-1/2 rounded-md bg-[#896DE7] px-5">
        <h1 className="text-2xl font-semibold text-white">{type}</h1>
      </div>
      <h1 className="text-3xl font-bold text-black">{children}</h1>
    </div>
  )
}
