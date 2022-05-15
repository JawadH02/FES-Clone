import { Nav, Sidebar, Display } from '../../../components/index'

const Arraychunks = () => {
  const data = [
    {
      nextLesson: '/interviews/javascript/capitalize',
      freeVideo: false,
      title: 'Q7 - Array Chunk',
      description:
        'In this video we will be discussing multiple different solutions to tackling the extremely common array chunk interview question.',
    },
  ]
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {data.map(({ title, description, freeVideo, nextLesson }, index) => (
          <Display
            title={title}
            description={description}
            freeVideo={freeVideo}
            nextLesson={nextLesson}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Arraychunks
