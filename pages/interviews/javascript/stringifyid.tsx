import { Nav, Sidebar, Display } from '../../../components/index'

const StringifyId = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Q4 - Stringify ID',
      description:
        'In this video we will be solving a $400,000 frontend developer inteview question using both, brute-force and top-tech best practise methods.',
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

export default StringifyId
