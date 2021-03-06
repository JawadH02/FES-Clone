import { Nav, Sidebar, Display } from '../../components/index'

const LinkedIn = () => {
  const data = [
    {
      nextLesson: '/application/portfolio',
      freeVideo: false,
      title: 'LinkedIn',
      description: `In this video you will learn how to build up your LinkedIn profile to help you land job offers passively. Although recruiters like to hit up people with proven commercial experience, starting now and building up your profile is absolutely crucial as you never know who is going to want you to work for them.`,
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

export default LinkedIn
