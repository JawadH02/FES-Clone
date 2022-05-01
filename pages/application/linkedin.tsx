import { Nav, Sidebar, Display } from '../../components/index'

const LinkedIn = () => {
  const title = 'LinkedIn'
  const description = `In this video you will learn how to build up your LinkedIn profile to help you land job offers passively. Although recruiters like to hit up people with proven commercial experience, starting now and building up your profile is absolutely crucial as you never know who is going to want you to work for them.`
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

export default LinkedIn
