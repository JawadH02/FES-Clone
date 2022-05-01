import useSidebar from '../../hooks/useSidebar'
import { sidebarData } from './sidebarData'
import { Submenu } from './Submenu'

export const Sidebar = () => {
  const { sidebar } = useSidebar()
  return (
    <div>
      <div
        className={
          sidebar
            ? `relative z-50 h-full w-[200px] border-r-[1px] bg-[#FAF9FA] shadow-md`
            : 'hidden'
        }
      >
        {sidebarData.map((section, index) => (
          <Submenu section={section} key={index} />
        ))}
        <div className="fixed bottom-0 left-0 flex w-[200px] flex-col bg-[#FAF9FA]">
          <hr className="m-0 border-t-[0.5px] border-gray-300" />
          <div className='flex flex-col items-center justify-center'>
            <div className="mt-2 flex items-center justify-center space-x-2">
              <p className="text-sm font-light">Privacy</p>
              <p className="text-sm font-light">Terms</p>
            </div>
            <p className="cursor-default py-2 text-sm font-light text-gray-700">
              Frontend Simplified &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
