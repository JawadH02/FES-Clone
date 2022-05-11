import { Nav, Sidebar, Display } from '../../components/index'

const Setup = () => {
  const data = [
    {
      freeVideo: true,
      title: 'Environment Setup',
      description: `In this video we will be setting your coding environment up for success. We will be using
  
  Visual Studio Code with the following extensions to make development faster and easier:
  
  Live Server (Ritwick Dey)
  
  Mithril Emmet (FallenMax)`,
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

export default Setup
