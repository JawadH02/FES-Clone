import { Nav, Sidebar, Display } from '../../../components/index'

const Palindrome = () => {
  const data = [
    {
      nextLesson: '/interviews/javascript/reverseinteger',
      freeVideo: false,
      title: 'Q2 - Palindrome',
      description:
        'In this video we will be discussing multiple different solutions to tackling the extremely common palindrome interview question.',
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

export default Palindrome
