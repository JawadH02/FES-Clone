import { Nav, Sidebar, Display } from '../../components/index'

const Responsive = () => {
  const data = [
    {
      nextLesson: '/projects/eportfolio',
      freeVideo: false,
      title: 'Responsive Project',
      description: `It's now time to build your first responsive website and this is where you will be able to see the true power of Flexbox. Because we had coded the website using Flexbox in the previous section, it makes it really easy for us to make this website look good on small phones and tablets. Flexbox and percentage width values also means there is no additional CSS required to make the website responsive on lapt`,
    },
  ]
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        {data.map(({ title, description, freeVideo, nextLesson }, index) => (
          <Display
            title={title}
            description={description}
            freeVideo={freeVideo}
            nextLesson={nextLesson}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Responsive
