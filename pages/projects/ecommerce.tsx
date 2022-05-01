import { Nav, Sidebar, Display } from '../../components/index'

const Ecommerce = () => {
  const title = 'E-Commerce Website'
  const description = `In this video you will learn how to use CSS best practises to build a really common real-world project. Make sure you code along with the video as we will continue to use Flexbox and responsive designs so you can get practise for the final section.`
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
