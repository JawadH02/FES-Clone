import { Nav, Sidebar, Display } from '../../components/index'

const Bestpractises = () => {
  const data = [
    {
      nextLesson: '/css/crashcourse',
      freeVideo: false,
      title: 'Best Practises',
      description:
        'In this video you will be going through semantic HTML best practises commonly used at top tech companies. Memorising every tag is absolutely unnecessary, so a cheat sheet is provided below to help you get the ball rolling. Feel free to Google or ask the Discord server if anything is unclear.',
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

export default Bestpractises
