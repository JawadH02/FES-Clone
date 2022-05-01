import { Nav, Sidebar, Display } from '../../../components/index'

const Maxcharacters = () => {
  const title = 'Q5 - Maximum Character'
  const description =
    'In this video we will be learning how to implement and use the most frequently tested data structure in tech interviews.'
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

export default Maxcharacters
