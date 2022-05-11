import { Nav, Sidebar, Display } from '../../components/index'

const Introduction = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Firebase Introduction',
      description: `In this video we will introduce you to Firebase and you will learn our secret to landing junior developer jobs.`,
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

export default Introduction
