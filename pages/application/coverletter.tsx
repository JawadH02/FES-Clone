import { Nav, Sidebar, Display } from '../../components/index'

const Coverletter = () => {
  const title = 'Cover Letter'
  const description = `In this video you will learn how to build the cover letter that landed David multiple high paying job offers at 20 years old without a degree. This cover letter is absolutely incredible and David has helped multiple people get into the industry using this style cover letter.`
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

export default Coverletter
