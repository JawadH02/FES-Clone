import { Nav, Sidebar, Display } from '../../../components/index'

const Anagrams = () => {
  const title = 'Q6 - Anagrams'
  const description =
    'In this video we will be discussing multiple different solutions to tackling the extremely common anagram interview question.'
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

export default Anagrams
