import { Nav, Sidebar, Display } from '../../components/index'

const Csstrivia = () => {
  const data = [
    {
      freeVideo: false,
      title: 'CSS Trivia Questions',
      description:
        'In this video we will be going through the most popular HTML and CSS trivia questions you will receive in the first round of your frontend developer interview.',
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

export default Csstrivia
