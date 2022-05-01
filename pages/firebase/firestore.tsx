import { Nav, Sidebar, Display } from '../../components/index'

const Firestore = () => {
  const title = 'Firebase Firestore'
  const description = `In this video we will learn how to use Firebase Firestore with React to build full-stack applications that will impress recruiters.`
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <Display title={title} description={description} />
      </div>
    </div>
  )
}

export default Firestore
