import { Nav, Sidebar, Display } from '../../components/index'

const Eportfolio = () => {
  const data = [
    {
      nextLesson: '/projects/ecommerce',
      freeVideo: false,
      title: 'E-Portfolio Website',
      description: `In this video you will build your first e-portfolio using CSS best practises used by top tech companies. This video will reinforce a lot of the theory you are familiar with already, along with a lot of new properties and practises. If you are unfamiliar with anything at any point, make sure you use Google. If you are still stuck, feel free to ask the Discord server.`,
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

export default Eportfolio
