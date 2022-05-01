import { Nav, Sidebar, Display } from '../../components/index'

const Auth = () => {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <Display />
      </div>
    </div>
  )
}

export default Auth