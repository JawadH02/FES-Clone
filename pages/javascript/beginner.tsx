import { Nav, Sidebar, Display } from '../../components/index'

const Beginner = () => {
  const title = 'JavaScript Beginner Challenges'
  const description = `In this video we will be building your JavaScript foundations and improving your problem solving skills. The JavaScript challenges section is geared towards building up your functional programming knowledge so you can pass technical interviews.

  In order to make the most of this video, we recommend coding along with this video. If you any questions and can't find your answer on Google, feel free to ask the discord server below!`
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

export default Beginner
