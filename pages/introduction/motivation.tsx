import { Nav, Sidebar, Display } from '../../components/index'

const Motivation = () => {
  const title = 'Mindset and Motivation'
  const description =
    'In this video we will be going through what it takes to become a top 1% engineer at a top tech company in the shortest time possible. We will be going through different techniques to overcome procrastination and lack of motivation, along with how you can maximise the efficiency of your time spent coding.'
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <Display title={title} description={description} />
      </div>
    </div>
  )
}

export default Motivation
