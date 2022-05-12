import { Nav, Sidebar, Display } from '../../../components/index'

const ReverseString = () => {
  const data = [
    {
      nextLesson: '/interviews/javascript/palindrome',
      freeVideo: false,
      title: 'Q1 - Reverse String',
      description:
        "In this video we will be be going through three different solutions to solve the extremely common 'Reverse String' question, including an extremely impressive solution using a new (and very important) JavaScript ES6 method.",
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

export default ReverseString
