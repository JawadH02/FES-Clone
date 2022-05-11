import { Nav, Sidebar, Display } from '../../../components/index'

const Steps = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Q9 - Steps',
      description:
        'In this video we will be discussing how to solve the difficult steps question using one of the hardest computer science concepts to understand, the nested for-loop.',
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

export default Steps
