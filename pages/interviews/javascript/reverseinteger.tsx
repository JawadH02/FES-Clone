import { Nav, Sidebar, Display } from '../../../components/index'

const ReverseInteger = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Q3 - Reverse Integer',
      description:
        'In this video we will be solving the reverse integer problem. This problem will give you a lot of practise with converting JavaScript types.',
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

export default ReverseInteger
