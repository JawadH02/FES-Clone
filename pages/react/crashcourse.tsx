import { Nav, Sidebar, Display } from '../../components/index'

const Crashcourse = () => {
  const title = 'React Crash Course'
  const description = `In this video you will be learning the fundamentals of React by going through the best React crash course ever made.

  To get this code working, there is a little set up not mentioned in the video.
  If you are coding on https://scrimba.com/g/glearnreact, click the gear icon in the top right corner and select 'add dependency...'. First add 'react', then add 'react-dom'.
  If you are building locally , you should first install create-react-app. Get it here: https://facebook.github.io/create-react-app/.
  
  In order to make the most of this video, we recommend taking your time coding along while also writing notes if this is your preferred learning method. If you get stuck at any point or are unsure about anything don't feel bad to look it up on Google, to practise your documentation/researching skills. If you can't find your answer on Google, feel free to ask the discord server below!`
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
