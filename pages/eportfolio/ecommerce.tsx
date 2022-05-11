import { Nav, Sidebar, Display } from '../../components/index'

const Ecommerce = () => {
  const data = [
    {
      freeVideo: false,
      title: 'E-Commerce with JavaScript',
      description: `In this video we will be working on top of the library app we have developed in the CSS section and adding JavaScript functionality to it. We will be going through many common JavaScript use cases that were covered in the previous sections to help you understand the real world application behind the theory.`,
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

export default Ecommerce
