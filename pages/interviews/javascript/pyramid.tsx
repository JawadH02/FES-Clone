import { Nav, Sidebar, Display } from '../../../components/index'

const Pyramid = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Q10 - Pyramid',
      description:
        'In this video we will be discussing how to solve the difficult pyramid question using the new nested for-loop.',
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

export default Pyramid
