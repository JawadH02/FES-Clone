import { Nav, Sidebar, Display } from '../../components/index'

const Preparation = () => {
  const data = [
    {
      nextLesson: '/final',
      freeVideo: false,
      title: 'Final Project Preparation',
      description: `In this project, we will be preparing for a real-world take home interview for a $80,000-$90,000 frontend developer role using everything we have learnt in the HTML, CSS, JavaScript and React sections.`,
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

export default Preparation
