import { Nav, Sidebar, Display } from '../../components/index'

const Final = () => {
  const data = [
    {
      freeVideo: false,
      title: 'Interview Question 1',
      description:
        'In this question, we will be practising our skills by solving a $100k+ question using vanilla JavaScript.',
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

export default Final
