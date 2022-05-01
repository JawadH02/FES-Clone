import { Nav, Sidebar, Display } from '../../components/index'

const Apply = () => {
  const title = 'How to Apply'
  const description = `This is the video you have been waiting for the entire course. This is exactly how to leverage all the skills we learnt during the course to impress recruiters and land you multiple interviews. David has applied to over 500 companies and knows exactly what works and what doesn't, and is going to show you what works so you can quickly and easily get your foot into the software engineering industry.

  Also, remember to use the PDF version of your resume.`
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

export default Apply