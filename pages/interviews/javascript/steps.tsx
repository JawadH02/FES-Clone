import { Nav, Sidebar, Display } from '../../../components/index'

const Steps = () => {
  const title = 'Q9 - Steps'
  const description =
    'In this video we will be discussing how to solve the difficult steps question using one of the hardest computer science concepts to understand, the nested for-loop.'
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

export default Steps
