import { Nav, Sidebar, Display } from '../components/index'

const Clones = () => {
  const data = [
    {
      nextLesson: '/final/preparation',
      freeVideo: false,
      title: 'Top-Tech Clones',
      description: `In this video we will be going through three full-stack clones you can build for practise to prepare for the final project and to beef up your portfolio to increase your chances of landing interviews when it's time to apply for jobs.`,
    },
  ]
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {data.map(({ title, description, freeVideo, nextLesson }) => (
          <Display
            title={title}
            description={description}
            freeVideo={freeVideo}
            nextLesson={nextLesson}
          />
        ))}
      </div>
    </div>
  )
}

export default Clones
