import { Nav, Sidebar, Display } from '../../components/index'

const Flexbox = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Flexbox Layout',
      description: `In this video we will be going over CSS Flexbox layout, which is really important for you to be able to place elements on a page wherever you want. Flexbox is one of the most used CSS properties, so mastering this is crucial.

  We will be testing the skills you learn in this video in a fun game called Flexbox Froggy to make sure you really understand Flexbox layout.`,
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

export default Flexbox
