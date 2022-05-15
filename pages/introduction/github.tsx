import { Nav, Sidebar, Display } from '../../components/index'

const Github = () => {
  const data = [
    {
      nextLesson: '/html/crashcourse',
      freeVideo: false,
      title: 'GitHub Setup',
      description: `GitHub is used by millions of developers to save and deploy their code.

  In this video you will learn how to build a GitHub account on github.com to impress recruiters when it's time to apply for jobs.
  
  GitHub: https://github.com
  Download Git: https://git-scm.com/downloads`,
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

export default Github
