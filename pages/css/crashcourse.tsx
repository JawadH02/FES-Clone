import { Nav, Sidebar, Display } from '../../components/index'

const Crashcourse = () => {
  const title = 'CSS Crash Course'
  const description = `In this video you will be learning the fundamentals of CSS by going through the exact same world class crash course David completed on his journey to top tech.

  In order to make the most of this video, you should code along with the tutorial in your Visual Studio Code environment we just set up. We recommend also taking notes with this video, if this is your preferred learning method. If you get stuck at any point or are unsure about anything don't feel bad to look it up on Google, in fact this is the perfect time to practise your documentation/researching skills. If you can't find your answer on Google, feel free to ask the discord server below!`
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <Display title={title} description={description} />
      </div>
    </div>
  )
}

export default Crashcourse