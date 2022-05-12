import { Nav, Sidebar, Display } from '../../components/index'

const Bestpractices = () => {
  const data = [
    {
      nextLesson: '/miniproject/build',
      freeVideo: false,
      title: 'CSS Best Practises',
      description: `In this tutorial, we will be going through how to solve the really common CSS layout problems you will come across using industry best practises. These common problems have been put together in a cheatsheet, which you can look at whenever you come across a CSS Layout issue. Over time, you will get really good at this and will naturally not need the cheatsheet anymore.`,
    },
  ]
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {data.map(({ title, description, freeVideo, nextLesson }) => (
          <Display
            title={title}
            description={description}
            freeVideo={freeVideo}
            nextLesson={nextLesson}
          />
        ))}
      </div>
    </div>
  )
}

export default Bestpractices
