import { Nav, Sidebar, Display } from '../../components/index'

const Jstrivia = () => {
  const data = [
    {
      nextLesson: '/interviews/csstrivia',
      freeVideo: false,
      title: 'JavaScript Trivia Questions',
      description:
        'In this video we will be going through the most popular JavaScript trivia questions you will receive in the first round of your frontend developer interview.',
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

export default Jstrivia
