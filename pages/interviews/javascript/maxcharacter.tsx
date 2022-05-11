import { Nav, Sidebar, Display } from '../../../components/index'

const Maxcharacters = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Q5 - Maximum Character',
      description:
        'In this video we will be learning how to implement and use the most frequently tested data structure in tech interviews.',
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

export default Maxcharacters
