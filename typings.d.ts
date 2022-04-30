interface Links {
    link: string
}

export interface Card {
  title: string
  desc: string
  links: Links[{}]
  id: number
}

export interface SubNav {
  subNav: string
}

export interface NavSections {
  title: string
  path: string
  icon: React.ElementType
  iconClosed?: React.ElementType
  iconOpened?: React.ElementType
  subNav?: SubNav[{}]
  disabled?: boolean
}