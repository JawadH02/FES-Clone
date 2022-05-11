import { Nav, Sidebar, Display } from '../../components/index'

const Motivation = () => {
  const data = [
    {
      freeVideo: true,
      title: 'Mindset and Motivation',
      description:
        'In this video we will be going through what it takes to become a top 1% engineer at a top tech company in the shortest time possible. We will be going through different techniques to overcome procrastination and lack of motivation, along with how you can maximise the efficiency of your time spent coding.',
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

export default Motivation
