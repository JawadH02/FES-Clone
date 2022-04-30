import { Card } from '../../typings'
import Link from 'next/link'

interface Props {
  card: Card
}

export const DashboardCard = ({ card }: Props) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-3xl border-t-[2px] border-gray-100 bg-white p-5 shadow-lg xl:w-[1200px]">
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-bold">{card.title}</h1>
        <p>{card.desc}</p>
        <h3 className="text-md cursor-default text-gray-500">Learn</h3>
        <div>
          <ul className="flex flex-col space-y-4">
            {card.links.map((link: any, index: number) => (
              <li key={index}>
                <Link href={`${link.linkTo}`}>
                  <a className="flex items-center space-x-4">
                    <button>
                      <link.icon className="h-[30px] w-[30px] rounded-full border-[1px] p-[5px] border-black" />
                    </button>
                    <h3 className="hover:underline">{link.link}</h3>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
