import { Nav, Sidebar, Display } from '../../components/index'

const Crashcourse = () => {
  const data = [
    {
      nextLesson: '/javascript/beginner',
      freeVideo: true,
      title: 'JavaScript Crash Course',
      description: `In this video you will be learning the fundamentals of JavaScript by going through the exact same world class crash course David completed on his journey to top tech.

    In order to make the most of this video, we recommend taking your time coding along in Visual Studio Code while also writing notes. If you get stuck at any point or are unsure about anything don't feel bad to look it up on Google, to practise your documentation/researching skills. If you can't find your answer on Google, feel free to ask the discord server below!`,
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

export default Crashcourse
