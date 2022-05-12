import { Nav, Sidebar, Display } from '../../components/index'

const Coverletter = () => {
  const data = [
    {
      nextLesson: '/application/linkedin',
      freeVideo: false,
      title: 'Cover Letter',
      description: `In this video you will learn how to build the cover letter that landed David multiple high paying job offers at 20 years old without a degree. This cover letter is absolutely incredible and David has helped multiple people get into the industry using this style cover letter.`,
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

export default Coverletter
