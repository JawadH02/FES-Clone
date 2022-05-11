import { Nav, Sidebar, Display } from '../../../components/index'

const Capitalize = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Q8 - Capitalize Sentence',
      description:
        'In this video we will be discussing multiple different solutions to tackling the extremely common sentence capitalization interview question.',
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

export default Capitalize
