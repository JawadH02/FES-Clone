import Link from 'next/link'
import React, { useState } from 'react'
import { NavSections } from '../../typings'

interface Props {
  section: NavSections
}

export const Submenu = ({ section }: Props) => {
  const [dropdown, setDropdown] = useState(false)

  const showSubnav = () => setDropdown(!dropdown)
  const flipSectionArrowIconsOnClick =
    section.subNav && dropdown
      ? section.iconOpened && <section.iconOpened />
      : section.subNav
      ? section.iconClosed && <section.iconClosed />
      : null
  return (
    <div>
      <ul className="px-1">
        <li className="space-x-3">
          {section.subNav ? (
            <a className="sidebarLink" onClick={showSubnav}>
              {section.title === 'Start Here' ? (
                <img className="h-4" src="/assets/div.png" alt="" />
              ) : (
                <section.icon className="text-[18px] opacity-60" />
              )}
              <div className="flex w-full items-center justify-between">
                <span className="text-[16px]">{section.title}</span>
                {flipSectionArrowIconsOnClick}
              </div>
            </a>
          ) : (
            <div>
              <Link href={`${section.path}`}>
                <a className="sidebarLink" onClick={showSubnav}>
                  <section.icon className="text-lg opacity-60" />
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
                        <a className="sidebarLink !py-6 text-[16px] text-black opacity-80">
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
