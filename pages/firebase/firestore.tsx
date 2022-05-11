import { Nav, Sidebar, Display } from '../../components/index'

const Firestore = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Firebase Firestore',
      description: `In this video we will learn how to use Firebase Firestore with React to build full-stack applications that will impress recruiters.`,
    },
  ]
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {data.map(({ title, description, freeVideo }) => (
          <Display
            title={title}
            description={description}
            freeVideo={freeVideo}
          />
        ))}
      </div>
    </div>
  )
}

export default Firestore
