import { Nav, Sidebar, Display } from '../../../components/index'

const ReverseString = () => {
  const title = 'Q1 - Reverse String'
  const description =
    "In this video we will be be going through three different solutions to solve the extremely common 'Reverse String' question, including an extremely impressive solution using a new (and very important) JavaScript ES6 method."
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

export default ReverseString
