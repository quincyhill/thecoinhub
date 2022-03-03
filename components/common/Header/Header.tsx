import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { ThemeButton } from '..'
import { Person, Wallet2 } from 'react-bootstrap-icons'
import { SearchForm } from '../../form'

interface NavLinkProps {
  children: ReactNode
}

const NavLinkContainer = ({ children }: NavLinkProps) => {
  return (
    <div className="flex items-center text-sm mx-4 my-0 text-slate-500 dark:text-slate-100 font-semibold tracking-wide pb-1 border-b-2 border-transparent hover:border-teal-600 hover:text-teal-600 dark:hover:text-teal-600">
      {children}
    </div>
  )
}

// use relative / absolute positioning for this
const ExploreDropDown = () => {
  // Show when user hovers over the explore navlink
  return (
    <ul className="flex flex-col rounded-md shadow-sm">
      <li className="rounded-sm bg-slate-100 ">All NFTs</li>
      <li className="rounded-sm bg-slate-100 ">Collectables</li>
    </ul>
  )
}

export default function Header() {
  const [exploreDropdownIsOpen, setExploreDropdownIsOpen] = useState(false)

  // container class is nice

  return (
    <nav className="bg-white dark:bg-slate-900 border-b-2 border-slate-200 px-2 py-4">
      <div className="container flex flex-row items-center mx-auto">
        <div className="w-2/12">
          <Link href="/">
            <a className="flex">
              <span className="self-center text-lg font-semibold whitespace-nowrap text-slate-900 dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-600">
                THE COINHUB
              </span>
            </a>
          </Link>
        </div>
        <div className="hidden sm:flex sm:flex-row sm:w-6/12">
          <SearchForm />
        </div>
        <div className="sm:w-4/12 flex flex-row justify-end">
          <ul className="flex flex-row mt-4 text-sm font-medium">
            <li>
              <NavLinkContainer>
                <Link href="/explore">
                  <a
                    onMouseEnter={() => {
                      setExploreDropdownIsOpen(true)
                    }}
                    onMouseLeave={() => {
                      setExploreDropdownIsOpen(false)
                    }}
                  >
                    <span>Explore</span>
                    {exploreDropdownIsOpen && <ExploreDropDown />}
                  </a>
                </Link>
              </NavLinkContainer>
            </li>
            <NavLinkContainer>
              <Link href="/rankings">
                <a>Rankings</a>
              </Link>
            </NavLinkContainer>
            <NavLinkContainer>
              <Link href="/about">
                <a>About</a>
              </Link>
            </NavLinkContainer>
            <NavLinkContainer>
              <Link href="/login">
                <a>
                  <Person className="w-6 h-6" />
                </a>
              </Link>
            </NavLinkContainer>
            <NavLinkContainer>
              <Wallet2 className="w-6 h-6 cursor-pointer" />
            </NavLinkContainer>
          </ul>
        </div>
      </div>
    </nav>
  )
}
