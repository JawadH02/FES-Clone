import { Nav, Sidebar, Display } from '../../../components/index'

const Capitalize = () => {
  const data = [
    {
      nextLesson: '/interviews/javascript/steps',
      freeVideo: false,
      title: 'Q8 - Capitalize Sentence',
      description:
        'In this video we will be discussing multiple different solutions to tackling the extremely common sentence capitalization interview question.',
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

export default Capitalize
