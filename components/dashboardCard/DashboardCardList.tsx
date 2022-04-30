import { Card } from '../../typings'
import { DashboardCard } from '../index'

interface Props {
  cardInfo: Card[]
}

export const DashboardCardList = ({ cardInfo }: Props) => {

  return (
    <div>
      <div className='space-y-4 p-5'>
        {cardInfo.map((card) => (
          <DashboardCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  )
}
