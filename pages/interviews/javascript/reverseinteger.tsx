import { Nav, Sidebar, Display } from '../../../components/index'

const ReverseInteger = () => {
  const title = 'Q3 - Reverse Integer'
  const description =
    'In this video we will be solving the reverse integer problem. This problem will give you a lot of practise with converting JavaScript types.'
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

export default ReverseInteger
