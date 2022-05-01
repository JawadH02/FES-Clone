import { Nav, Sidebar, Display } from '../../components/index'

const Bestpractises = () => {
  const title = 'Best Practises'
  const description =
    'In this video you will be going through semantic HTML best practises commonly used at top tech companies. Memorising every tag is absolutely unnecessary, so a cheat sheet is provided below to help you get the ball rolling. Feel free to Google or ask the Discord server if anything is unclear.'
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

export default Bestpractises
