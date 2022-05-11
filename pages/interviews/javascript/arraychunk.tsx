import { Nav, Sidebar, Display } from '../../../components/index'

const Arraychunks = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Q7 - Array Chunk',
      description:
        'In this video we will be discussing multiple different solutions to tackling the extremely common array chunk interview question.',
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

export default Arraychunks
