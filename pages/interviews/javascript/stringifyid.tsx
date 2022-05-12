import { Nav, Sidebar, Display } from '../../../components/index'

const StringifyId = () => {
  const data = [
    {
      nextLesson: '/interviews/javascript/maxcharacter',
      freeVideo: false,
      title: 'Q4 - Stringify ID',
      description:
        'In this video we will be solving a $400,000 frontend developer inteview question using both, brute-force and top-tech best practise methods.',
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

export default StringifyId
