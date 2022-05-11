import { Nav, Sidebar, Display } from '../components/index'

const Final = () => {
  const data = [
    {
      freeVideo: false,
      title: 'React Final Project',
      description: `In this project, we will be extending our real-world take home interview for $80,000-$90,000 frontend developer roles using everything we have learnt in the HTML, CSS, JavaScript and React sections.`,
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

export default Final
