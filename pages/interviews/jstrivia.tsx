import { Nav, Sidebar, Display } from '../../components/index'

const Jstrivia = () => {
  const title = 'JavaScript Trivia Questions'
  const description =
    'In this video we will be going through the most popular JavaScript trivia questions you will receive in the first round of your frontend developer interview.'
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

export default Jstrivia
