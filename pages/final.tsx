import { Nav, Sidebar, Display } from '../components/index'

const Final = () => {
  const title = 'React Final Project'
  const description = `In this project, we will be extending our real-world take home interview for $80,000-$90,000 frontend developer roles using everything we have learnt in the HTML, CSS, JavaScript and React sections.`
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
