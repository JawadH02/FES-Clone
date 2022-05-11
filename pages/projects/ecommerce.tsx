import { Nav, Sidebar, Display } from '../../components/index'

const Ecommerce = () => {
  const data = [
    {
      freeVideo: false,
      title: 'E-Commerce Website',
      description: `In this video you will learn how to use CSS best practises to build a really common real-world project. Make sure you code along with the video as we will continue to use Flexbox and responsive designs so you can get practise for the final section.`,
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

export default Ecommerce
