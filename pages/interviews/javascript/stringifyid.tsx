import { Nav, Sidebar, Display } from '../../../components/index'

const StringifyId = () => {
  const title = 'Q4 - Stringify ID'
  const description =
    'In this video we will be solving a $400,000 frontend developer inteview question using both, brute-force and top-tech best practise methods.'
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

export default StringifyId
