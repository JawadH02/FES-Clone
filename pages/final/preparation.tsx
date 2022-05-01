import { Nav, Sidebar, Display } from '../../components/index'

const Preparation = () => {
  const title = 'Final Project Preparation'
  const description = `In this project, we will be preparing for a real-world take home interview for a $80,000-$90,000 frontend developer role using everything we have learnt in the HTML, CSS, JavaScript and React sections.`
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

export default Preparation
