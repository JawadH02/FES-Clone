import { Nav, Sidebar, Display } from '../../components/index'

const Javascript = () => {
  const data = [
    {
      nextLesson: '/interviews/javascript/reversestring',
      freeVideo: false,
      title: 'JavaScript Advanced Challenges',
      description:
        'In this video we will be setting up your enviornment to solve the most common interview sections you will come across while applying to jobs.',
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

export default Javascript
