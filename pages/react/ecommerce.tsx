import { Nav, Sidebar, Display } from '../../components/index'

const Ecommerce = () => {
  const title = 'E-Commerce with React'
  const description = `In this video we will not only be rewriting the library app we have developed previous sections, but we will also be expanding the functionality using advanced features used by top tech companies to really impress interviewers going through your application.

  NOTE: This video used the installation of react-router-dom@5.3.0. React Router is currently on version six and we will be going through the new changes in the next video. If you wish to use V6 instead for this tutorial, we have provided you with instructions to the changes required in the "Download Assets" file below, along with the solution to the video code.
  
  Final Site: https://libraryapp-react.herokuapp.com/`
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

export default Ecommerce
