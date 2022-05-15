import { Nav, Sidebar, Display } from '../../../components/index'

const Pyramid = () => {
  const data = [
    {
      nextLesson: '/interviews/final',
      freeVideo: false,
      title: 'Q10 - Pyramid',
      description:
        'In this video we will be discussing how to solve the difficult pyramid question using the new nested for-loop.',
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

export default Pyramid
