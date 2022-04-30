import Head from 'next/head'
import { Nav, Sidebar } from '../components/index'

const Home = () => {
  return (
    <div className='relative h-screen bg-[#FFFFFF] lg:h-[140vh]'>
      <Head>
        <title>Frontend Simplified</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Sidebar />
    </div>
  )
}

export default Home
