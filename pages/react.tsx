import { Nav, Sidebar, Display } from '../components/index'

const React = () => {
  const title = 'React Environment Setup'
  const description = `In this setup video, we will be installing our first React boiler plate and getting our feet wet with React's most important features before jumping into the upcoming crash course.`
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

export default React
