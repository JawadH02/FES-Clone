import Link from 'next/link'
import React, { useState } from 'react'
import useSidebar from '../../hooks/useSidebar'
import { NavSections } from '../../typings'

interface Props {
  section: NavSections
}

export const Submenu = ({ section }: Props) => {
  const [dropdown, setDropdown] = useState(false)
  const { handleSidebar } = useSidebar()

  const showSubnav = () => setDropdown(!dropdown)
  return (
    <div>
      <ul className="px-1">
        <li className="space-x-3">
          {section.subNav ? (
            <a className="sidebarLink" onClick={showSubnav}>
              {section.title === 'Start Here' ? (
                <img className="h-4" src="/assets/div.png" alt="" />
              ) : (
                <section.icon />
              )}
              <div className="flex w-full items-center justify-between">
                <span className="text-[16px]">{section.title}</span>
                {section.subNav && dropdown
                  ? section.iconOpened && <section.iconOpened />
                  : section.subNav
                  ? section.iconClosed && <section.iconClosed />
                  : null}
              </div>
            </a>
          ) : (
            <div onClick={handleSidebar}>
              <Link href={`${section.path}`}>
                <a className="sidebarLink" onClick={showSubnav}>
                  <section.icon />
                  <span className="text-[16px]">{section.title}</span>
                </a>
              </Link>
            </div>
          )}
          <ul>
            {dropdown &&
              section.subNav?.map((subSection: NavSections, index: number) => (
                <>
                  <li key={index}>
                    {!subSection.disabled ? (
                      <Link href={`${subSection?.path}`}>
                        <a
                          className="sidebarLink text-[16px]"
                          onClick={handleSidebar}
                        >
                          {subSection.title}
                        </a>
                      </Link>
                    ) : (
                      <div className="flex h-12 cursor-default items-center space-x-2 overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-4 text-sm font-light text-gray-500">
                        {subSection.title}
                      </div>
                    )}
                  </li>
                </>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
