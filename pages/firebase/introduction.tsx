import { Nav, Sidebar, Display } from '../../components/index'

const Introduction = () => {
  const title = 'Firebase Introduction'
  const description = `In this video we will introduce you to Firebase and you will learn our secret to landing junior developer jobs.`
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

export default Introduction
