import { Nav, Sidebar, Display } from '../../../components/index'

const Pyramid = () => {
  const title = 'Q10 - Pyramid'
  const description =
    'In this video we will be discussing how to solve the difficult pyramid question using the new nested for-loop.'
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

export default Pyramid
