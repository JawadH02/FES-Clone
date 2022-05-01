import { Nav, Sidebar, Display } from '../../components/index'

const Final = () => {
  const title = 'Final Project'
  const description = `For this project, we will combine all the skills we are now familiar with and apply them to a real world project scenario. We will be using this website https://treact.owaiskhan.me/components/landingPages/SaaSProductLandingPage as inspiration.

  After starting with developing the desktop user interface, we will then move onto making it mobile responsive. Take your time with this project, and don't feel bad to ask the Discord server for any help if you get stuck. Good luck.
  
  Note: The FAQ section (component called accordion) is out of scope for this project.`
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
