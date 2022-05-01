import { Nav, Sidebar, Display } from '../../components/index'

const Auth = () => {
  const title = 'Firebase Authentication'
  const description = `In this video we will learn how to use Firebase Authentication with React to build advanced and secure applications that will impress recruiters.

  Documentation: https://firebase.google.com/docs/auth/web/start`
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

export default Auth
