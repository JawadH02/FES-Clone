import { Nav, Sidebar, Display } from '../../../components/index'

const Maxcharacters = () => {
  const data = [
    {
      nextLesson: '/interviews/javascript/anagrams',
      freeVideo: false,
      title: 'Q5 - Maximum Character',
      description:
        'In this video we will be learning how to implement and use the most frequently tested data structure in tech interviews.',
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

export default Maxcharacters
