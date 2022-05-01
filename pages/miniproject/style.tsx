import { Nav, Sidebar, Display } from '../../components/index'

const Style = () => {
  const title = 'Style Mini Project'
  const description = `It's time to go back to our first project we have built and style it using CSS best practises. We will be reinforcing all the Flexbox knowledge we have just learnt in order to develop your first responsive website.

  Although this project is not the prettiest and will not be used in our e-portfolios, it is crucial to code along with this video to understand how all the HTML and CSS theory works together to display a website using industry best practises.`
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

export default Style