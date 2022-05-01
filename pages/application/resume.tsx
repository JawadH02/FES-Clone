import { Nav, Sidebar, Display } from '../../components/index'

const Resume = () => {
  const title = 'Resume'
  const description = `In this video you will learn how to build a resume that will impress recruiters for intern, junior and mid level and top tech roles. We will be using advanced technical keywords that you have learnt along the way along with leveraging any experiences you had in the past to create a really impressive resume.`
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

export default Resume
