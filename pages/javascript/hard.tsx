import { Nav, Sidebar, Display } from '../../components/index'

const Hard = () => {
  const title = 'JavaScript Advanced Challenges'
  const description = `In this video we will be strengthening your JavaScript foundations and improving your problem solving skills through hard level difficulty questions. The JavaScript challenges section is geared towards building your advanced knowledge in JavaScript in order to impress interviewers for intern and junior frontend developer roles.

  Resources mentioned in the video:
  1. The Async Await Episode I Promised (1x Speed)
  2. Async Await JavaScript ES7 (1.5x Speed)
  3. Async JS Crash Course - Callbacks, Promises, Async Await (1.5x Speed & Optional)`
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

export default Hard
