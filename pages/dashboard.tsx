import { DashboardCardList, Nav, Sidebar } from '../components/index'
import { ThemeIcon, RingProgress, Text, Center } from '@mantine/core'
import { useState } from 'react'
import { Check } from 'tabler-icons-react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { cardInfo } from '../components/dashboardCard/dashboardData'

const Dashboard = () => {
  const [addPoint, setAddPoint] = useState(0)
  return (
    <>
      <Nav />
      <div className='flex'>
        <Sidebar />
        <div className="w-full xl:mx-auto xl:max-w-7xl">
          <div className="mt-4 flex flex-col items-center justify-center md:flex-row md:justify-start md:space-x-4">
            <RingProgress
              size={150}
              sections={[
                {
                  value: addPoint,
                  color: `${addPoint < 100 ? 'blue' : 'green'}`,
                },
              ]}
              label={
                <Text color="blue" weight={700} align="center" size="xl">
                  {addPoint < 100 ? (
                    `${addPoint}%`
                  ) : (
                    <Center>
                      <ThemeIcon
                        color="teal"
                        variant="light"
                        radius="xl"
                        size="xl"
                      >
                        <Check size={22} />
                      </ThemeIcon>
                    </Center>
                  )}
                </Text>
              }
            />
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="flex items-center space-x-2">
                <figure>
                  <img className="h-6" src="/assets/div.png" alt="div" />
                </figure>
                <h3 className="font-light">
                  {' '}
                  <span className="font-semibold">0</span> of{' '}
                  <span className="font-semibold">46</span> lessons completed
                </h3>
              </div>
              <div className="flex items-center space-x-3">
                <FaMoneyBillWave />
                <h3 className="font-light">
                  <span className="font-semibold">$0</span> estimated market
                  value
                </h3>
              </div>
            </div>
          </div>
          <div className="mt-4 flex">
            {/* cards */}
            <DashboardCardList cardInfo={cardInfo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
