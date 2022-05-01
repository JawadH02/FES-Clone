import { Nav, Sidebar, Display } from '../../components/index'

const Github = () => {
  const title = "GitHub Setup"
  const description = `GitHub is used by millions of developers to save and deploy their code.

  In this video you will learn how to build a GitHub account on github.com to impress recruiters when it's time to apply for jobs.
  
  GitHub: https://github.com
  Download Git: https://git-scm.com/downloads`
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

export default Github