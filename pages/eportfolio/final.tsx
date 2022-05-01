import { Nav, Sidebar, Display } from '../../components/index'

const Final = () => {
  const title = "E-Portfolio Final Project"
  const description = `In this project, you will be building out a real-world take home interview for a $80,000-$90,000 frontend developer role using everything we have learnt in the HTML, CSS and JavaScript sections.

  Resources mentioned in this video:
  https://dev.d24jig8s1lr7n9.amplifyapp.com/
  https://omdbapi.com/
  https://github.com/public-apis/public-apis`
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

export default Final