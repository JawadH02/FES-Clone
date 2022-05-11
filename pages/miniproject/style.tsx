import { Nav, Sidebar, Display } from '../../components/index'

const Style = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Style Mini Project',
      description: `It's time to go back to our first project we have built and style it using CSS best practises. We will be reinforcing all the Flexbox knowledge we have just learnt in order to develop your first responsive website.

  Although this project is not the prettiest and will not be used in our e-portfolios, it is crucial to code along with this video to understand how all the HTML and CSS theory works together to display a website using industry best practises.`,
    },
  ]
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {data.map(({ title, description, freeVideo }) => (
          <Display
            title={title}
            description={description}
            freeVideo={freeVideo}
          />
        ))}
      </div>
    </div>
  )
}

export default Style
