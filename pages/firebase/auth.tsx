import { Nav, Sidebar, Display } from '../../components/index'

const Auth = () => {
  const data = [
    {
      nextLesson: '/firebase/firestore',
      freeVideo: false,
      title: 'Firebase Authentication',
      description: `In this video we will learn how to use Firebase Authentication with React to build advanced and secure applications that will impress recruiters.

  Documentation: https://firebase.google.com/docs/auth/web/start`,
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

export default Auth
