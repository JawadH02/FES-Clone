import { Nav, Sidebar, Display } from '../../../components/index'

const Palindrome = () => {
  const title = "Q2 - Palindrome"
  const description = "In this video we will be discussing multiple different solutions to tackling the extremely common palindrome interview question."
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

export default Palindrome