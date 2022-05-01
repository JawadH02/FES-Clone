import Head from 'next/head'
import { Display, Nav, Sidebar } from '../components/index'

const Home = () => {
  const title = 'Course Introduction'
  const description =
    `In this course, you will not only learn how to code, but you will also learn how to leverage the skills you learn to land very good frontend software engineering roles. This course is designed to get you employable and working at a top tech company in the fastest time possible.
    
    David Bragg is the main instructor of this course. At 19 he had no idea how to code and at 20 he landed a six figure frontend job at a top tech company. He did this by only focusing on the frontend industry, as it is quick and easy to learn and does not require a degree.
    
    In this course you will be learning HTML5, CSS3, JavaScript ES6+ and React along with tutorials of professionally designed projects, coded using best practises at top tech companies. These projects we build together will be shown on your e-portfolio, which will be used to apply to jobs. We will also only go through important theory required to get into the industry - leaving out everything you can learn on the job. This lets you maximise the use of your time, as you will be getting commercial experience, expanding your e-portfolio and getting paid while your competition is still struggling at university.`

  return (
    <div className="relative h-screen bg-[#FFFFFF] lg:h-[140vh]">
      <Head>
        <title>Frontend Simplified</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex">
        <Sidebar />
        <Display title={title} description={description} />
      </div>
    </div>
  )
}

export default Home
