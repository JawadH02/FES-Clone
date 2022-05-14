import { Sidebar, Nav } from '../components/index'
import useAuth from '../hooks/useAuth'
import { useSubscription } from '../hooks/useSubscription'

const Account = () => {
  const { user } = useAuth()
  const subscription = useSubscription(user)
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div>
          <h1>Account Details</h1>
          <div>
            <h2>Email</h2>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
