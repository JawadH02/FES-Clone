import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

const SidebarContext = createContext({
  sidebar: false,
  handleSidebar: () => {},
})

interface SidebarProviderProps {
  children: React.ReactNode
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = useCallback(() => {
    setSidebar(!sidebar)
    
  }, [sidebar])

  const memoedValue = useMemo(() => ({ handleSidebar, sidebar }), [sidebar])

  return (
    <SidebarContext.Provider value={memoedValue}>
      {children}
    </SidebarContext.Provider>
  )
}

export default function useSidebar() {
  return useContext(SidebarContext)
}
