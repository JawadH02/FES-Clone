import { Nav, Sidebar, Display } from '../../components/index'

const Advanced = () => {
  const title = "Advanced E-Portfolio"
  const description = `In this video you will be building one of the best e-portfolio's that a recruiter will likely ever see from a junior developer. The functionality of this e-portfolio we will build is incredibly impressive and will definitely help your chances landing interviews.

  We will also be going over new concepts such as Promises, event listeners, light/dark mode, advanced animations/transitions and much more!`
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

export default Advanced