import { Nav, Sidebar, Display } from '../../components/index'

const Javascript = () => {
  const title = 'JavaScript Advanced Challenges'
  const description =
    'In this video we will be setting up your enviornment to solve the most common interview sections you will come across while applying to jobs.'
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

export default Javascript
