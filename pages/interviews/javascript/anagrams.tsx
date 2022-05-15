import { Nav, Sidebar, Display } from '../../../components/index'

const Anagrams = () => {
  const data = [
    {
      nextLesson: '/interviews/javascript/arraychunk',
      freeVideo: false,
      title: 'Q6 - Anagrams',
      description:
        'In this video we will be discussing multiple different solutions to tackling the extremely common anagram interview question.',
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

export default Anagrams
