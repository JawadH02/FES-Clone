import { Nav, Sidebar, Display } from '../../../components/index'

const Arraychunks = () => {
  const title = 'Q7 - Array Chunk'
  const description =
    'In this video we will be discussing multiple different solutions to tackling the extremely common array chunk interview question.'
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

export default Arraychunks
