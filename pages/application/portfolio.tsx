import { Nav, Sidebar, Display } from '../../components/index'

const Portfolio = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Portfolio Tips',
      description: `In this video you will learn how to build a really impressive portfolio that will help you land high paying job offers with zero commercial experience and without a degree. These portfolio tips will put you light years ahead of your competition and will help you land multiple interviews when you start applying to jobs very soon.

  Make sure your images in your portfolio are compressed and are a maximum of 150kb. You can use CompressPng to compress your screenshots.
  
  You can also use Canva to create cool mockups to show off your projects.`,
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

export default Portfolio
