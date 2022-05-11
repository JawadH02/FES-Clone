import { Nav, Sidebar, Display } from '../components/index'

const React = () => {
  const data = [
    {
      freeVideo: false,
      title: 'React Environment Setup',
      description: `In this setup video, we will be installing our first React boiler plate and getting our feet wet with React's most important features before jumping into the upcoming crash course.`,
    },
  ]
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {data.map(({ title, description, freeVideo }) => (
          <Display
            title={title}
            description={description}
            freeVideo={freeVideo}
          />
        ))}
      </div>
    </div>
  )
}

export default React
