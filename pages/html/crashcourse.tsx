import { Nav, Sidebar, Display } from '../../components/index'

const Crashcourse = () => {
  const data = [
    {
      freeVideo: true,
      title: 'HTML Crash Course',
      description: `In this video you will be learning the fundamentals of HTML by going through the exact same world class crash course David completed on his journey to top tech.

  In order to make the most of this video, you should code along with the tutorial in your Visual Studio Code environment we just set up. We recommend also taking notes with this video, if this is your preferred learning method. If you get stuck at any point or are unsure about anything don't feel bad to look it up on Google, in fact this is the perfect time to practise your documentation/researching skills. If you can't find your answer on Google, feel free to ask the discord server below!`,
    },
  ]
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {data.map(({ title, description, freeVideo }) => (
          <Display
            title={title}
            description={description}
            freeVideo={freeVideo}
          />
        ))}
      </div>
    </div>
  )
}

export default Crashcourse
