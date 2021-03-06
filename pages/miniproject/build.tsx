import { Nav, Sidebar, Display } from '../../components/index'

const Build = () => {
  const data = [
    {
      nextLesson: '/miniproject/style',
      freeVideo: false,
      title: 'Build Mini Project',
      description: `In this video you will be coding the semantic HTML best practises we have gone through in the previous section. Keep in mind - memorising every tag is absolutely unnecessary, so having the cheat sheet available will come in handy. Feel free to Google or ask the Discord server if you have any questions or if anything in this video is unclear.`,
    },
  ]
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {data.map(({ title, description, freeVideo, nextLesson }, index) => (
          <Display
            title={title}
            description={description}
            freeVideo={freeVideo}
            nextLesson={nextLesson}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Build
