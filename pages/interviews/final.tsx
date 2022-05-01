import { Nav, Sidebar, Display } from '../../components/index'

const Final = () => {
  const title = 'Interview Question 1'
  const description =
    'In this question, we will be practising our skills by solving a $100k+ question using vanilla JavaScript.'
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
